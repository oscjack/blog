$(function() {
    var breadcrumbs = [];
    var pathname = window.location.pathname;
    var breadbrumb = $('.breadcrumb');
    
    if (pathname.match(/php/)) {
        breadcrumbs.push({'text': '后端', 'link': '/backend'});
        Cookies.set('activemenu', 'backend');
        $('.active').removeClass('active');
        $('.nav-backend').addClass('active');
    }
    
    if (pathname.match(/backend/)) {
        breadcrumbs.push({'text': '后端', 'link': '/backend'});
    }
    
    if (pathname.match(/front/)) {
        breadcrumbs.push({'text': '前端', 'link': '/front'});
    }
    
    if (pathname.match(/db/)) {
        breadcrumbs.push({'text': '数据库', 'link': '/db'});
    }
    
    if (pathname.match(/system/)) {
        breadcrumbs.push({'text': '系统', 'link': '/system'});
    }
    
    if (pathname.match(/opensource/)) {
        breadcrumbs.push({'text': '开源', 'link': '/opensource'});
    }
    
    if (pathname.match(/handbook/)) {
        breadcrumbs.push({'text': '手册', 'link': '/handbook'});
    }
    
    if (breadcrumbs.length > 0) {
        breadbrumb.find('li:first-child').append('<span class="divider">/</span>');
    }
    
    if ($('.publish-info').length !== 0) {
        breadcrumbs.push({'text': $('h2').text(), 'link': ''});
    }
    
    for (var i=0, length=breadcrumbs.length; i < length; i++) {
        if (breadcrumbs[i].link) {
            if (i == length - 1) {
                breadbrumb.append('<li><a href="' + breadcrumbs[i].link + '">' + breadcrumbs[i].text + '</a></li>');
            }else {
                breadbrumb.append('<li><a href="' + breadcrumbs[i].link + '">' + breadcrumbs[i].text + '</a><span class="divider">/</span></li>');
            }
        }else {
            breadbrumb.append('<li>' + breadcrumbs[i].text + '</li>');
        }
    }
});