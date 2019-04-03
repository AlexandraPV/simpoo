import $ from 'jquery';
import TemplateOne from './js_templates/template_one'



class Root{
    constructor(){
        this.template_one = new TemplateOne();
    }
}

window.App = new Root();
window.$ = $;