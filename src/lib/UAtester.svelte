<script>
    import '../app.css'
    import { DEVICE_type, browser, cookieStatus, doNotTrackStatus, OS, PDFviewerStatus } from 'uadetect'
</script>

<div>
    <h1 class="text-center font-primary font-bold text-8xl p-10">
        We know a lot about you
    </h1>
    <p class="text-center font-primary text-4xl p-10">
        We think that you are on {DEVICE_type}, using the {browser} browser, and you are using {OS} operating system. 
    </p>
</div>