precision mediump float;
uniform vec4 filterArea;
uniform sampler2D uSampler;
uniform float val;
varying vec2 vTextureCoord;

void main (void) {
    vec4 col = texture2D(uSampler, vTextureCoord);
    if(vTextureCoord.x > val) 
		gl_FragColor = texture2D(uSampler, vec2(val, vTextureCoord.y));
    else                      
		gl_FragColor = col;
}