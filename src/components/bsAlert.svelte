<script>
    export let text;
    export let icon;
    export let imgAlt;
    export let type;
    import '../../node_modules/bootstrap/dist/css/bootstrap.css'
</script>

<alert class="alert alert-{type} d-flex align-items-center">
    <img src={icon} alt={imgAlt}>
    <div>
        {text}
    </div>
</alert>