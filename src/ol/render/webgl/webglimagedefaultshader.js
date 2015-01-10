// This file is automatically generated, do not edit
goog.provide('ol.render.webgl.imagereplay.shader.Default');

goog.require('ol.webgl.shader');



/**
 * @constructor
 * @extends {ol.webgl.shader.Fragment}
 * @struct
 */
ol.render.webgl.imagereplay.shader.DefaultFragment = function() {
  goog.base(this, ol.render.webgl.imagereplay.shader.DefaultFragment.SOURCE);
};
goog.inherits(ol.render.webgl.imagereplay.shader.DefaultFragment, ol.webgl.shader.Fragment);
goog.addSingletonGetter(ol.render.webgl.imagereplay.shader.DefaultFragment);


/**
 * @const
 * @type {string}
 */
ol.render.webgl.imagereplay.shader.DefaultFragment.DEBUG_SOURCE = 'precision mediump float;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\n\nuniform float u_opacity;\nuniform sampler2D u_image;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  gl_FragColor.rgb = texColor.rgb;\n  float alpha = texColor.a * v_opacity * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.imagereplay.shader.DefaultFragment.OPTIMIZED_SOURCE = 'precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.imagereplay.shader.DefaultFragment.SOURCE = goog.DEBUG ?
    ol.render.webgl.imagereplay.shader.DefaultFragment.DEBUG_SOURCE :
    ol.render.webgl.imagereplay.shader.DefaultFragment.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @extends {ol.webgl.shader.Vertex}
 * @struct
 */
ol.render.webgl.imagereplay.shader.DefaultVertex = function() {
  goog.base(this, ol.render.webgl.imagereplay.shader.DefaultVertex.SOURCE);
};
goog.inherits(ol.render.webgl.imagereplay.shader.DefaultVertex, ol.webgl.shader.Vertex);
goog.addSingletonGetter(ol.render.webgl.imagereplay.shader.DefaultVertex);


/**
 * @const
 * @type {string}
 */
ol.render.webgl.imagereplay.shader.DefaultVertex.DEBUG_SOURCE = 'varying vec2 v_texCoord;\nvarying float v_opacity;\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nattribute vec2 a_offsets;\nattribute float a_opacity;\nattribute float a_rotateWithView;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  mat4 offsetMatrix = u_offsetScaleMatrix;\n  if (a_rotateWithView == 1.0) {\n    offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  }\n  vec4 offsets = offsetMatrix * vec4(a_offsets, 0., 0.);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.) + offsets;\n  v_texCoord = a_texCoord;\n  v_opacity = a_opacity;\n}\n\n\n';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.imagereplay.shader.DefaultVertex.OPTIMIZED_SOURCE = 'varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.imagereplay.shader.DefaultVertex.SOURCE = goog.DEBUG ?
    ol.render.webgl.imagereplay.shader.DefaultVertex.DEBUG_SOURCE :
    ol.render.webgl.imagereplay.shader.DefaultVertex.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 * @struct
 */
ol.render.webgl.imagereplay.shader.Default.Locations = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_image = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_image' : 'l');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetRotateMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_offsetRotateMatrix' : 'j');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetScaleMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_offsetScaleMatrix' : 'i');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_opacity = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_opacity' : 'k');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_projectionMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_projectionMatrix' : 'h');

  /**
   * @type {number}
   */
  this.a_offsets = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_offsets' : 'e');

  /**
   * @type {number}
   */
  this.a_opacity = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_opacity' : 'f');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_position' : 'c');

  /**
   * @type {number}
   */
  this.a_rotateWithView = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_rotateWithView' : 'g');

  /**
   * @type {number}
   */
  this.a_texCoord = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_texCoord' : 'd');
};
