function trackProfile(source) {
    console.debug("tracking " + source);
    insights.track({
        id: "research-profile-click",
        parameters: {
            locale: insights.parameters.locale(),
            screenSize: insights.parameters.screenType(),
            path: insights.parameters.path(),
            provider: source
        }
    });
}

function trackOpenSource(source) {
    console.debug("tracking " + source);
    insights.track({
        id: "open-source-click",
        parameters: {
            locale: insights.parameters.locale(),
            screenSize: insights.parameters.screenType(),
            path: insights.parameters.path(),
            repo: source
        }
    });
}

function trackMouseOver(data) {
    console.debug("tracking over " + data);
    insights.track({
        id: "network-over",
        parameters: {
            locale: insights.parameters.locale(),
            screenSize: insights.parameters.screenType(),
            path: insights.parameters.path(),
            element: data,
        }
    });
}