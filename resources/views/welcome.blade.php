<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>
    </head>
    <body class="antialiased">
        <div id="app">

        </div>

        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
