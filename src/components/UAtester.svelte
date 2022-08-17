
<script>
    import '../app.css'
    import {
        DEVICE_type,
        browser,
        OS,
        cookieStatus,
        doNotTrackStatus,
        maxTouchPoints,
        browserOnlineStatus
    } from 'uadetect'
    const browserOnline = browserOnlineStatus === "BROWSER_online"
    import {
        version,
        engine,
        PDFviewerStatus
    } from 'uadetect';
</script>

<div>
    <h1 class="text-center font-primary font-bold text-8xl p-10">
        We know a lot about you
    </h1>
    <p class="text-center font-primary text-4xl p-10">
        We think that you are on a {DEVICE_type} device using the {browser} browser, and you are using {OS} operating system. Your cookie status is {cookieStatus}, and your doNotTrackStatus is {doNotTrackStatus}. 
        The max amout of touch points on your device is {maxTouchPoints}. <br>
        You are using the {engine} engine and your browser's version number is {version}. Obviously, your brower is
        {#if browserOnline}
            online
        {/if}
        {#if !browserOnline}
            offline
        {/if} 
        <br>
        {#if PDFviewerStatus}
            And your browser has a PDF viewer.
        {/if}
        {#if !PDFviewerStatus}
            And your browser does not have a PDF viewer.
        {/if}
    </p>
</div>