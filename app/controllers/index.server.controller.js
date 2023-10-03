const getHome = ('/home', function(req, res, next) {
    req.session.lastVisit = new Date();
    if(req.session.lastVisit){
          console.log(req.session.lastVisit);
    }
    res.render('index', { title: 'Home', name: "Tuong Nguyen Pham" });
});


const getAboutMe = ('/aboutme', function(req, res, next) {
    res.render('aboutme', { title: 'About Me', name: "Tuong Nguyen Pham"});
});

const getProject = ('/project', function(req, res, next) {
    res.render('project', { title: 'Projects', name: "Tuong Nguyen Pham" });
});

const getContact = ('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact', name: "Tuong Nguyen Pham", address: "100 Dail Crescent", phone: "437 428 6446", email: "npham50@my.centennialcollege.ca" });
});

const getServices = ('/services', function(req, res, next) {
    res.render('services', { title: 'Services', name: "Tuong Nguyen Pham" });
});

module.exports = {
    getHome,
    getAboutMe,
    getProject,
    getContact,
    getServices
}
