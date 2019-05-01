import * as path from "path";
import {Stats, Tracer} from "@opencensus/core"

const grpc = require('grpc');
const tracing = require('@opencensus/nodejs');
const {registerAllGrpcViews} = require('@opencensus/instrumentation-grpc');
const {globalStats} = require('@opencensus/core');
const {plugin} = require('@opencensus/instrumentation-grpc');
const {PrometheusStatsExporter} = require('@opencensus/exporter-prometheus');
const promClient = require('prom-client');
const {ZipkinTraceExporter} = require('@opencensus/exporter-zipkin');

function setupPrometheusStats(): Stats {
    // Enable OpenCensus exporters to export metrics to Prometheus
    const promExporter = new PrometheusStatsExporter({
        // Metrics will be exported on http://localhost:{port}/metrics
        port: 9464,
        startServer: true,
        prefix: 'mcn'
    });

    // Starts Prometheus exporter
    globalStats.registerExporter(promExporter);

    // Register some default metrics (ideally these would be part of opencensus)
    const collectDefaultMetrics = promClient.collectDefaultMetrics;
    const register = promExporter.registry;
    collectDefaultMetrics({
        prefix: 'mcn_',
        register: register
    });

    return globalStats;
}

function setupZipkinTracing(): Tracer {
    // Enable Zipkin tracing
    const zipkinOptions = {
        url: 'http://localhost:9411/api/v2/spans',
        serviceName: 'microservice-chassis-nodejs'
    };

    const zipkinExporter = new ZipkinTraceExporter(zipkinOptions);
    tracing.registerExporter(zipkinExporter).start();

    // Starts tracing and set sampling rate
    const tracer = tracing.start({
        samplingRate: 1, // For demo purposes, always sample
    }).tracer;

    return tracer;
}

export function setupTracerAndExporters() {
    const stats = setupPrometheusStats();
    const tracer = setupZipkinTracing();

    // Enable grpc stats and tracing
    const basedir = path.dirname(require.resolve('grpc'));
    const version = require(path.join(basedir, 'package.json')).version;
    plugin.enable(grpc, tracer, version, /** plugin options */{}, basedir, stats);
    registerAllGrpcViews(stats);

    return tracer;
}
