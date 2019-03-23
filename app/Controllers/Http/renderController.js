'use strict'

class renderController {

  renderHome({view}){
    return view.render('welcome')
  }

  renderError({view}){
    return view.render('error')

  }

  renderProject({view}){
    return view.render('layouts/projectLayout')
  }
}

module.exports = renderController;
