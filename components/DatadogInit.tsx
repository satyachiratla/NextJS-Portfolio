// components/DatadogInit.jsx (or .tsx)
"use client"; // REQUIRED to run on the browser

import React, { useEffect } from "react";
import { datadogRum } from "@datadog/browser-rum";
import { reactPlugin } from "@datadog/browser-rum-react";

let isDatadogInitialized = false;

export default function DatadogInit() {
  useEffect(() => {
    const applicationId = process.env.NEXT_PUBLIC_DD_APPLICATION_ID;
    const clientToken = process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN;

    if (
      applicationId &&
      clientToken &&
      !isDatadogInitialized &&
      !datadogRum.getInitConfiguration()
    ) {
      datadogRum.init({
        applicationId,
        clientToken,
        site: process.env.NEXT_PUBLIC_DD_SITE,
        service: process.env.NEXT_PUBLIC_DD_SERVICE,
        env: process.env.NEXT_PUBLIC_ENV || "development",
        version: "1.0.0",
        sessionSampleRate: 100,
        sessionReplaySampleRate: 1,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: "mask-user-input",
        silentMultipleInit: true,
        plugins: [reactPlugin()],
      });
      isDatadogInitialized = true;
    }
  }, []);

  return null;
}
