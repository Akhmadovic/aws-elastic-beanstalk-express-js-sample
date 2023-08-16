const express = require('express');
const app = express();
const port = 8080;
=======
app.get('/', (req, res) => res.send('Akhmadovic is here!2'));
>>>>>>> 28ee1c22ffc2903fb934d4644f1c505163db8b35

app.listen(port);
console.log(`App running on http://localhost:${port}`);
