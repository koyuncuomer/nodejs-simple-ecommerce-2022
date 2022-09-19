const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const customerRoutes = require('./routers/customer');
const adminRoutes = require('./routers/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));

app.use(customerRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
    const viewsData = {
        pageTitle: '404',
        pageInfo: '404 Page not found',
    };
    res.status(404).render('404', viewsData);
});

app.listen(3000, () => {
    console.log('server started port: 3000');
});