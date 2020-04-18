const express = require('express');

const projectsController = {};

projectsController.index = (req, res) => {
    const projects = [{
        title: 'Dashboard',
        slug:'dashboard',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '4/4/2020',
        img: 'https://cdn.dribbble.com/users/1126935/screenshots/11079922/media/70439cf006ed0ba0834b7b4df07394dc.png'
    },
    {
        title: 'Shoe',
        slug:'shoe',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '4/4/2020',
        img: 'https://cdn.dribbble.com/users/6234/screenshots/11077922/media/4149f7f4159154b8f321a6a21dff35a7.png'
    },
    {
        title: 'AnotherPage',
        slug:'anotherpage',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '4/4/2020',
        img: 'https://cdn.dribbble.com/users/365424/screenshots/11084362/media/85973620cf02ab59d8e91f96d1abb913.png'
    },
    {
        title: 'Colors',
        slug:'colors',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '4/4/2020',
        img: 'https://cdn.dribbble.com/users/56953/screenshots/11083089/media/3ddca0c15f12204d06b1c6176521d066.png'
    },
    {
        title: 'Shapes',
        slug:'shapes',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '4/4/2020',
        img: 'https://cdn.dribbble.com/users/4859/screenshots/11087049/media/1cb4b437794362d62b7c2fc0748d520c.png'
    },
    {
        title: 'Phone',
        slug:'phone',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '4/4/2020',
        img: 'https://cdn.dribbble.com/users/806561/screenshots/11078496/media/64c4206b694b01cade438dc10da8590a.jpg'
    }
]
    res.render('projects/index', {
        projects: projects
    })
}

projectsController.create = (req, res) => {
    res.render('projects/create')
}

projectsController.store = (req, res) => {
    res.send({
        saved: true
    })
}

projectsController.show = (req, res) => {
    res.render('projects/show')
}

projectsController.edit = (req, res) => {
    res.render('projects/edit')
}

projectsController.update = (req, res) => {
    res.send({
        updated: true
    })
}

projectsController.delete = (req, res) => {
    res.send({
        deleted: true
    })
}

module.exports = projectsController;
