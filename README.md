<!DOCTYPE html>\
<html lang="en">\
<head>\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width, initial-scale=1.0">\
<title>UPJ Student Success Platform</title>\
<script src="[https://unpkg.com/react@18/umd/react.production.min.js](https://unpkg.com/react@18/umd/react.production.min.js)"></script>\
<script src="[https://unpkg.com/react-dom@18/umd/react-dom.production.min.js](https://unpkg.com/react-dom@18/umd/react-dom.production.min.js)"></script>\
<script src="[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)"></script>\
<script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>\
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)">\
<style>\
body {\
margin: 0;\
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\
-webkit-font-smoothing: antialiased;\
-moz-osx-font-smoothing: grayscale;\
}

```
    .confetti {
        animation: confetti-fall 1s ease-out;
    }
    
    @keyframes confetti-fall {
        0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(0) rotate(360deg); opacity: 0; }
    }
    
    .pulse-glow {
        animation: pulse-glow 2s infinite;
    }
    
    @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
    }
    
    .slide-in {
        animation: slide-in 0.3s ease-out;
    }
    
    @keyframes slide-in {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    .fade-in {
        animation: fade-in 0.3s ease-out;
    }
    
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>
```

</head>\
<body>\
<div id="root"></div>\
<script type="text/babel" src="app.js"></script>\
</body>\
</html>
