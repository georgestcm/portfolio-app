'use strict'

class renderController {
  renderHome({view}){
    return view.render('welcome')
  }

  renderError({view}){
    return view.render('error')

  }
}

module.exports = renderController;
