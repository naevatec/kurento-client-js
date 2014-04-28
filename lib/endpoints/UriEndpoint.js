/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var extend   = require('extend');
var inherits = require('inherits');

var checkType = require('../checkType');


/**
 * Media API for the Kurento Web SDK
 *
 * @module kwsMediaApi/endpoints
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var Endpoint = require('../Endpoint');


/**
 * Interface for endpoints the require a URI to work. An example of this, would be a :rom:cls:`PlayerEndpoint` whose URI property could be used to locate a file to stream through its :rom:cls:`MediaSource`
 *
 * @abstract
 * @class   module:kwsMediaApi/endpoints~UriEndpoint
 * @extends module:kwsMediaApi~Endpoint
 */

/**
 *
 * @constructor
 *
 * @param {string} id
 * @param {module:kwsMediaApi~MediaContainer} parent
 * @param {module:kwsMediaApi~MediaPipeline} pipeline
 * @param {module:kwsMediaApi/endpoints~UriEndpoint.constructorParams} params
 */
function UriEndpoint(id, parent, pipeline, params)
{
  Endpoint.call(this, id, parent, pipeline, params);
};
inherits(UriEndpoint, Endpoint);


/**
 * Returns the uri for this endpoint.
 *
 * @param {module:kwsMediaApi/endpoints~UriEndpoint.getUriCallback} [callback]
 *
 * @return {module:kwsMediaApi/endpoints~UriEndpoint}
 *  The own media object
 */
UriEndpoint.prototype.getUri = function(callback){
  this.invoke('getUri', callback);

  return this;
};
/**
 * @callback UriEndpoint~getUriCallback
 * @param {Error} error
 * @param {String} result
 *  the uri as a String
 */

/**
 * Pauses the feed
 *
 * @param {module:kwsMediaApi/endpoints~UriEndpoint.pauseCallback} [callback]
 *
 * @return {module:kwsMediaApi/endpoints~UriEndpoint}
 *  The own media object
 */
UriEndpoint.prototype.pause = function(callback){
  this.invoke('pause', callback);

  return this;
};
/**
 * @callback UriEndpoint~pauseCallback
 * @param {Error} error
 */

/**
 * Stops the feed
 *
 * @param {module:kwsMediaApi/endpoints~UriEndpoint.stopCallback} [callback]
 *
 * @return {module:kwsMediaApi/endpoints~UriEndpoint}
 *  The own media object
 */
UriEndpoint.prototype.stop = function(callback){
  this.invoke('stop', callback);

  return this;
};
/**
 * @callback UriEndpoint~stopCallback
 * @param {Error} error
 */

/**
 * @type   module:kwsMediaApi/endpoints~UriEndpoint.constructorParams
 * @extend module:kwsMediaApi~Endpoint.constructorParams
 */
UriEndpoint.constructorParams = {};
extend(UriEndpoint.constructorParams, Endpoint.constructorParams);

/**
 * @type   module:kwsMediaApi/endpoints~UriEndpoint.events
 * @extend module:kwsMediaApi~Endpoint.events
 */
UriEndpoint.events = [];
UriEndpoint.events.concat(Endpoint.events);


module.exports = UriEndpoint;