import React from 'react'

import
{
	Title,
	Meta,
	render,
	getState,
	getHttpClient,
	preload,
	onPageLoaded,
	goto,
	redirect,
	load_state,
	loadState,
	Preload_started,
	PRELOAD_STARTED,
	Preload_finished,
	PRELOAD_FINISHED,
	Preload_failed,
	PRELOAD_FAILED,
	Preload_method_name,
	PRELOAD_METHOD_NAME,
	Preload_options_name,
	PRELOAD_OPTIONS_NAME,
	PRELOAD,
	REDIRECT,
	LOAD_STATE,
	GO_TO,
	NAVIGATED,
	action,
	reset_error,
	resetError,
	create_handler,
	createHandler,
	state_connector,
	stateConnector,
	underscoredToCamelCase,
	event_name,
	eventName,
	Link,
	IndexLink,
	authorize,
	websocket,
	get_cookie,
	getCookie,
	replace_location,
	replaceLocation,
	push_location,
	pushLocation
}
from '../index.es6'

describe(`exports`, function()
{
	it(`should export ES6`, () =>
	{
		Title.should.be.a('function')
		Meta.should.be.a('function')

		render.should.be.a('function')
		getState.should.be.a('function')
		getHttpClient.should.be.a('function')
		preload.should.be.a('function')
		onPageLoaded.should.be.a('function')

		goto.should.be.a('function')
		redirect.should.be.a('function')
		load_state.should.be.a('function')
		loadState.should.be.a('function')

		Preload_started.should.be.a('string')
		PRELOAD_STARTED.should.be.a('string')
		Preload_finished.should.be.a('string')
		PRELOAD_FINISHED.should.be.a('string')
		Preload_failed.should.be.a('string')
		PRELOAD_FAILED.should.be.a('string')

		Preload_method_name.should.be.a('string')
		PRELOAD_METHOD_NAME.should.be.a('string')
		Preload_options_name.should.be.a('string')
		PRELOAD_OPTIONS_NAME.should.be.a('string')

		PRELOAD.should.be.a('string')
		LOAD_STATE.should.be.a('string')
		REDIRECT.should.be.a('string')
		GO_TO.should.be.a('string')
		NAVIGATED.should.be.a('string')

		action.should.be.a('function')
		reset_error.should.be.a('function')
		resetError.should.be.a('function')
		create_handler.should.be.a('function')
		createHandler.should.be.a('function')
		state_connector.should.be.a('function')
		stateConnector.should.be.a('function')

		underscoredToCamelCase.should.be.a('function')
		event_name.should.be.a('function')
		eventName.should.be.a('function')

		Link.should.be.a('function')
		IndexLink.should.be.a('function')

		authorize(() => {}, () => {}, () => {}).should.be.a('function')
		websocket.should.be.a('function')

		get_cookie.should.be.a('function')
		getCookie.should.be.a('function')

		replace_location.should.be.a('function')
		replaceLocation.should.be.a('function')
		push_location.should.be.a('function')
		pushLocation.should.be.a('function')
	})

	it(`should export ES5`, () =>
	{
		const _ = require('../index.common')

		_.Title.should.be.a('function')
		_.Meta.should.be.a('function')

		// Combined Redux exports

		_.render.should.be.a('function')
		_.getState.should.be.a('function')
		_.getHttpClient.should.be.a('function')
		_.preload.should.be.a('function')
		_.onPageLoaded.should.be.a('function')

		_.goto.should.be.a('function')
		_.redirect.should.be.a('function')
		_.load_state.should.be.a('function')
		_.loadState.should.be.a('function')

		_.Preload_started.should.be.a('string')
		_.PRELOAD_STARTED.should.be.a('string')
		_.Preload_finished.should.be.a('string')
		_.PRELOAD_FINISHED.should.be.a('string')
		_.Preload_failed.should.be.a('string')
		_.PRELOAD_FAILED.should.be.a('string')

		_.Preload_method_name.should.be.a('string')
		_.PRELOAD_METHOD_NAME.should.be.a('string')
		_.Preload_options_name.should.be.a('string')
		_.PRELOAD_OPTIONS_NAME.should.be.a('string')

		_.PRELOAD.should.be.a('string')
		_.LOAD_STATE.should.be.a('string')
		_.REDIRECT.should.be.a('string')
		_.GO_TO.should.be.a('string')
		_.NAVIGATED.should.be.a('string')

		_.action.should.be.a('function')
		_.reset_error.should.be.a('function')
		_.resetError.should.be.a('function')
		_.create_handler.should.be.a('function')
		_.createHandler.should.be.a('function')
		_.state_connector.should.be.a('function')
		_.stateConnector.should.be.a('function')

		_.underscoredToCamelCase.should.be.a('function')
		_.event_name.should.be.a('function')
		_.eventName.should.be.a('function')

		_.Link.should.be.a('function')
		_.IndexLink.should.be.a('function')

		_.authorize(() => {}, () => {}, () => {}).should.be.a('function')
		_.websocket.should.be.a('function')

		_.get_cookie.should.be.a('function')
		_.getCookie.should.be.a('function')

		_.replace_location.should.be.a('function')
		_.replaceLocation.should.be.a('function')
		_.push_location.should.be.a('function')
		_.pushLocation.should.be.a('function')
	})

	it(`should export rendering service`, () =>
	{
		const server = require('../server')

		server.should.be.a('function')
		server.render.should.be.a('function')
	})
})