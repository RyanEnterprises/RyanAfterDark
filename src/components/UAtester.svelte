<script>
    import '../app.css'
    import {
        DEVICE_type,
        browser,
        OS,
        cookieStatus,
        doNotTrackStatus,
        maxTouchPoints
    } from 'uadetect'
</script>

<div>
    <h1 class="text-center font-primary font-bold text-8xl p-10">
        We know a lot about you
    </h1>
    <p class="text-center font-primary text-4xl p-10">
        We think that you are on a {DEVICE_type} device using the {browser} browser, and you are using {OS} operating system. Your cookie status is {cookieStatus}, and your doNotTrackStatus is {doNotTrackStatus}. 
        The max amout of touch points on your device is {maxTouchPoints}.
    </p>
</div>