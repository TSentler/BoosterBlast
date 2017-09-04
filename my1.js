(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StaticBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,204,0.808)").s().p("AgJAjQgGgBgHgFQgKgHgDgIQgCgHABgHQACgMAFgHQAFgIAIgEQAJgEAIABIgBgCIABABQAKAAAKAGQAJAGAEAJQAEAKgBAKQgCALgHAIQgHAIgKADIgKABQgFAAgFgCg");
	this.shape.setTransform(83.2,202.2,0.812,0.804);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,153,0.808)").s().p("AgJAjQgGgBgHgFQgKgHgDgIQgCgHABgHQACgMAFgHQAFgIAIgEQAJgEAIABIgBgCIABABQAKAAAKAGQAJAGAEAJQAEAKgBAKQgCALgHAIQgHAIgKADIgKABQgFAAgFgCg");
	this.shape_1.setTransform(330.6,91.7,0.671,0.671);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.808)").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_2.setTransform(366.9,146.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.808)").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_3.setTransform(258.9,163.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,204,204,0.808)").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_4.setTransform(172,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,204,204,0.808)").s().p("AAAAMIgIgBIgDgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgCgFQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGQgBAEgDACQgCABgFAAIgEAAg");
	this.shape_5.setTransform(72.5,367.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(204,204,204,0.808)").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_6.setTransform(66,190.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_7.setTransform(273.9,149.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_8.setTransform(200.9,370.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_9.setTransform(390.9,217.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_10.setTransform(24,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_11.setTransform(82,65.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_12.setTransform(244.9,68.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_13.setTransform(236.9,286.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAMIgIgBIgDgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgCgFQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGQgBAEgDACQgCABgFAAIgEAAg");
	this.shape_14.setTransform(157.5,248.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_15.setTransform(160,135.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_16.setTransform(253.9,281.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAMIgIgBIgDgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgCgFQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGQgBAEgDACQgCABgFAAIgEAAg");
	this.shape_17.setTransform(128.5,304.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_18.setTransform(45,151.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_19.setTransform(313.9,383.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_20.setTransform(389.9,235.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIANQgCgCgBgHQgBgIACgFIACgEQACgBAFAAIAGAAIAAAAIAEAEQADACAAACIAAAGIAAAIIgDADIgEADIgEABQgGAAgDgCg");
	this.shape_21.setTransform(156,12.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_22.setTransform(12,275.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AABAMIgJgBIgDgBIgFgIQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGIgDAGQgDABgEAAIgEAAg");
	this.shape_23.setTransform(111.5,168.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCAJIgJgEQgBgFACgDIADgFQACgBAFAAIAFAAIAHAHQgBAFgBACIgGAEIgDABg");
	this.shape_24.setTransform(179.9,364);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AABAMIgIgBIgFgBIgEgIQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGIgDAGQgDABgEAAIgEAAg");
	this.shape_25.setTransform(47.5,351.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_26.setTransform(228.9,75.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_27.setTransform(354.9,42.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_28.setTransform(328.9,298.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AABAMIgJgBIgDgBIgFgIQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGIgDAGQgDABgEAAIgEAAg");
	this.shape_29.setTransform(250.4,156.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AABAMIgMgCIgDgDIgCgFQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGIgDAGQgDABgEAAIgEAAg");
	this.shape_30.setTransform(60.5,61.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("A/ZfaMAAAg+zMA+zAAAMAAAA+zg");
	this.shape_31.setTransform(200,200,0.995,0.995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StaticBG, rect = new cjs.Rectangle(0,0,400,400), [rect]);


(lib.StarField = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgIANQgCgCgBgHQgBgIACgFIACgEQACgBAFAAIAGAAIAAAAIAEAEQADACAAACIAAAGIAAAIIgDADIgEADIgEABQgGAAgDgCg");
	this.shape.setTransform(232.9,101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_1.setTransform(5,382.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AABAMIgJgBIgDgBIgFgIQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGIgDAGQgDABgEAAIgEAAg");
	this.shape_2.setTransform(395.4,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_3.setTransform(363.9,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgIARIgCgBIgDgCQgDgDgBgLQABgGABgDQAFgGAGACIABgDIANADQAEAEADAEQAAAFgEAEIgJAIIgEAEIgCABg");
	this.shape_4.setTransform(182.4,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_5.setTransform(7,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgGAEIgDABIgBAAIgEgCg");
	this.shape_6.setTransform(147,385.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQADgCAEAAIAGAAIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_7.setTransform(212.9,221.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgIANQgCgCgBgHQgBgIACgFIACgEQACgBAFAAIAGAAIAAAAIAEAEQADACAAACIAAAGIAAAIIgDADIgEADIgEABQgGAAgDgCg");
	this.shape_8.setTransform(153,179.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_9.setTransform(339.9,124.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_10.setTransform(346.9,336.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAAAMIgIgBIgDgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgCgFQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGQgBAEgDACQgCABgFAAIgEAAg");
	this.shape_11.setTransform(93.5,323.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AABAMIgJgBIgDgBIgFgIQgCgFAEgDQAFgFAFADIAAgDIAAAAIAHABQAFABACABIAHAHIgCAGIgDAGQgDABgEAAIgEAAg");
	this.shape_12.setTransform(254.4,293.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgEAIIgHgCQgBgGABgDIADgEQAEgDAJABIAIAIIgDAGIgDACIgDACIgDABIgBAAIgEgCg");
	this.shape_13.setTransform(95,51.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_14.setTransform(25,302);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_15.setTransform(343.9,379.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_16.setTransform(77,105);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_17.setTransform(369.9,271);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_18.setTransform(264.9,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgNAUQgIgFgCgHIgBgJIABgHQAAgCAEgEQAKgJAJACIAAgCQANACAHAKQAEAEAAAEQACAEgCAEQgCANgNAEQgFACgEAAQgGAAgHgEg");
	this.shape_19.setTransform(101,372.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AAAAZQgJgBgHgGQgEgDgBgDQgDgFAAgIIABgHIAEgGQALgJAIACIAAgCIAAgBQAMAFAFAFQAJAHgBAJQAAAFgEAFIgGAIQgHAFgIAAIAAAAg");
	this.shape_20.setTransform(180.9,288.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_21.setTransform(336.9,69);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_22.setTransform(272.9,193);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_23.setTransform(74,234);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_24.setTransform(298.9,304);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_25.setTransform(211.9,96);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgNAVQgHgFgDgIIgBgJIABgIIAEgFQAKgKAJADIAAgDQAMADAIAKQAEAEAAAEQACADgCAFQgCAMgNAFQgFADgEAAQgGAAgHgEg");
	this.shape_26.setTransform(7,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StarField, rect = new cjs.Rectangle(-1,-1,402,402), [rect]);


(lib.SpaceCorridor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// walls
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("ATEfQIAAg3IAegQIAehaQAAgFgCgEIgSgfQAsgVA4gJQgbAEgPgHQgNgFAFgWIAAgyQgsAKgEgmQgHgzAFhGQAXgHgCgiIgBgJQgXABAGgUQAMgnAPgWIAAi0QAAgFgCgCQgsgegOgrQAEgPgBgPQgFg3gIgyIAAhqIAegTQABhUAChWQAIjmgBjSIAUiCIgegoQAAgtgFgsIgPhuQgFgDgFgFIAAhdIAUgJQgIgvACgYQAKieAaiXIgegoQAAgfABgdQAFhCAOhAIAUgUQAAgjgJghQgQg2gFgwQAKgUANgSQAQgUAVgMQALgcADggQAIhhAFhiIAhgZQgKgmAcgPQACgCAAgFIgxghQADiOgEiRIhkg8IAAhGQgLgIgJgMIAAh4IXmAAMAAAA+fgEgqpAfQMAAAg+fIXmAAIAAA7IgZA1QgIASgRAKIAABaIgUAoIApBGQgRBMgtA/QgHALgLAKIgKCMQAAAFABAFQAHAXAVAHIA9BQIAABaIgfAoIAABGIgUAoQAqDTADD5QABApAZAdIAJAKIAAAUQgPAFgMAIQgXAQgUAfIAzAyIALAmIgKAFQgHACgEAFIgKCWIgpAyQgDAxAJAaQAQAtAdATIAKCMQAKAHAJAJIAAB1IgIAJQgGAIgFAKIgUB4QAKBRAdBHIAAAFIgdANIgpBGIgKCCIAeAeIAAGQIgUAeIAAAyIA9BaIAJAyIAABiIgTAgQgGAmACAgQAEBFATA4IAACvg");
	this.shape.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceCorridor, rect = new cjs.Rectangle(-273,-1,546,402), [rect]);


(lib.ShipGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7B").s().p("AAAifYAAAAAAATgCAdYgBAegCAmgBAnYgCAmgBAmAAAeYgBAdABATAAAAIAAAKIATAAIAAgKYAAAAABgTgBgdYAAgdgBgngCgmYgBgngCgmgBgeYgCgdgBgTAAAAIAAAA");
	this.shape.setTransform(-1,6.8,1,1,0,0,0,0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7B").s().p("AgdAWIAdg7IAeA7QgNAQgPAAQgOAAgRgQg");
	this.shape_1.setTransform(0,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag7APIAAgdIB3AAIAAAdg");
	this.shape_2.setTransform(0,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AAFkDIAyBuIAAGZQAAgChtACQACAAgCmZQAAgEAbg1QAbg4AFADg");
	this.shape_3.setTransform(0,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("Ag2EEQACAAgCmZQAAgEAbg1QAbg4AFADIAyBuIAAGZQAAgChtACg");
	this.shape_4.setTransform(0,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AhAiaICBDHIgoBuIhZAAg");
	this.shape_5.setTransform(12,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E7B").s().p("AhACbIAAk1ICBDHIgoBug");
	this.shape_6.setTransform(12,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("AhAiaICBDHIgoBuIhZAAg");
	this.shape_7.setTransform(-12,7.3,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E7B").s().p("AhACbIAAk1ICBDHIgoBug");
	this.shape_8.setTransform(-12,7.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-27.2,39,54);
p.frameBounds = [rect];


(lib.ShieldBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// states
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape.setTransform(68,13.5,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.569)").s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_1.setTransform(68,13.5,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(1,1,1).p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_2.setTransform(40,13.5,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.639)").s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_3.setTransform(40,13.5,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(1,1,1).p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_4.setTransform(12,13.5,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.659)").s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_5.setTransform(12,13.5,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10,0.7,10,0.7).s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_6.setTransform(12,13.5,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10,0.7,10,0.7).s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_7.setTransform(12,13.5,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10,0.7,10,0.7).s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_8.setTransform(12,13.5,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6,p:{x:12}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7,p:{x:12}},{t:this.shape_4},{t:this.shape_6,p:{x:40}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7,p:{x:40}},{t:this.shape_2},{t:this.shape_6,p:{x:68}},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,82,29);
p.frameBounds = [rect, rect, rect, rect];


(lib.Shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shield
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape.setTransform(0,0,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10,0.7,10,0.7).s().p("AhjhhQBhgdBmAdQgjCKhBBHQhehYgFh5g");
	this.shape_1.setTransform(0,0,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(1,1,1).p("AhzhwQBwghB3AhQgpCghLBSQhthmgGiMg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-11.5,0.8,11.6,0.8).s().p("AhyhwQBwghB1AhQgoCghLBSQhthmgFiMg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(1,1,1).p("AhuhsQBrggByAgQgnCahIBPQhphigFiHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-11.1,0.8,11.1,0.8).s().p("AhuhsQBsggBxAgQgnCahIBPQhphigFiHg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(1,1,1).p("AhqhnQBogfBtAfQglCThGBMQhlhfgFiAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10.6,0.8,10.7,0.8).s().p("AhphnQBngfBsAfQgkCThGBMQhlhfgEiAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF9900").ss(1,1,1).p("AhlhjQBjgdBoAdQgjCNhDBJQhghbgFh7g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10.2,0.7,10.2,0.7).s().p("AhlhjQBjgdBoAdQgjCNhDBJQhghbgFh7g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF9900").ss(1,1,1).p("AhhhfQBfgcBkAcQgiCHhABGQhchXgFh2g");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-9.7,0.7,9.8,0.7).s().p("AhhhfQBfgcBkAcQgjCHg/BGQhchXgFh2g");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF9900").ss(1,1,1).p("AhdhaQBbgbBgAbQghCAg9BDQhYhTgFhwg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-9.3,0.6,9.4,0.6).s().p("AhdhaQBbgbBgAbQgiCAg8BDQhYhTgFhwg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9900").ss(1,1,1).p("AhYhWQBWgZBbAZQgfB7g6A/QhUhPgEhrg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-8.9,0.6,8.9,0.6).s().p("AhYhWQBXgZBaAZQgfB7g6A/QhUhPgEhrg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF9900").ss(1,1,1).p("AhUhSQBSgYBXAYQgeB1g3A8QhPhLgFhmg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-8.4,0.6,8.5,0.6).s().p("AhUhSQBSgYBXAYQgeB1g3A8QhPhLgFhmg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF9900").ss(1,1,1).p("AhThRQBRgYBWAYQgdBzg3A8QhPhKgEhlg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-8.4,0.6,8.4,0.6).s().p("AhThRQBSgYBVAYQgeBzg2A8QhPhKgEhlg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF9900").ss(1,1,1).p("AhXhVQBVgZBaAZQgfB5g5A/QhThOgEhqg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-8.8,0.6,8.8,0.6).s().p("AhXhVQBWgZBZAZQgfB5g5A/QhShOgFhqg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF9900").ss(1,1,1).p("AhbhZQBZgaBeAaQggB/g8BBQhXhRgEhvg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-9.2,0.6,9.2,0.6).s().p("AhbhZQBZgaBeAaQggB/g8BBQhWhRgFhvg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF9900").ss(1,1,1).p("AhfhdQBdgbBiAbQghCFg/BEQhahVgFh0g");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-9.6,0.7,9.6,0.7).s().p("AhfhdQBdgbBiAbQghCFg/BEQhahVgFh0g");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9900").ss(1,1,1).p("AhjhhQBhgcBmAcQgjCKhBBHQhehYgFh5g");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10,0.7,10,0.7).s().p("AhjhhQBhgcBmAcQgjCKhBBHQhehYgFh5g");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF9900").ss(1,1,1).p("AhnhlQBlgeBqAeQgkCQhEBKQhihcgFh+g");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10.4,0.7,10.4,0.7).s().p("AhnhlQBlgeBqAeQglCQhDBKQhihcgFh+g");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF9900").ss(1,1,1).p("AhrhpQBpgfBuAfQgmCWhGBMQhmhfgFiDg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-10.8,0.8,10.8,0.8).s().p("AhrhpQBpgfBuAfQgmCWhGBMQhmhfgFiDg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9900").ss(1,1,1).p("AhvhsQBsghBzAhQgnCahJBQQhqhjgFiHg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-11.1,0.8,11.2,0.8).s().p("AhvhsQBtghByAhQgnCahJBQQhqhjgFiHg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF9900").ss(1,1,1).p("AhzhwQBwgiB3AiQgoCghMBSQhthmgGiMg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-11.5,0.8,11.6,0.8).s().p("AhzhwQBwgiB3AiQgoCghMBSQhthmgGiMg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF9900").ss(1,1,1).p("Ah3h0QB0gjB7AjQgqCmhOBVQhxhqgGiRg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFCC00","#FFEC93"],[0.004,1],-12,0.9,12,0.9).s().p("Ah3h0QB0gjB7AjQgqCmhOBVQhxhqgGiRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.2,scaleY:1.2}},{t:this.shape,p:{scaleX:1.2,scaleY:1.2}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.802,scaleY:0.799}},{t:this.shape,p:{scaleX:0.802,scaleY:0.799}}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-14.5,26,29);
p.frameBounds = [rect, new cjs.Rectangle(-12,-13.5,24.1,27), new cjs.Rectangle(-11.6,-13,23.2,26), new cjs.Rectangle(-11.1,-12.5,22.3,25), new cjs.Rectangle(-10.7,-12,21.4,24), new cjs.Rectangle(-10.3,-11.5,20.6,23), new cjs.Rectangle(-9.8,-11,19.7,22), new cjs.Rectangle(-9.4,-10.5,18.8,21), new cjs.Rectangle(-8.9,-10,17.9,20), new cjs.Rectangle(-9,-10,18,20), new cjs.Rectangle(-8.9,-9.9,17.8,19.9), new cjs.Rectangle(-9.3,-10.4,18.6,20.8), new cjs.Rectangle(-9.7,-10.8,19.4,21.7), new cjs.Rectangle(-10.1,-11.3,20.2,22.6), new cjs.Rectangle(-10.5,-11.7,21,23.5), new cjs.Rectangle(-10.9,-12.2,21.8,24.4), new cjs.Rectangle(-11.3,-12.6,22.6,25.3), new cjs.Rectangle(-11.7,-13.1,23.4,26.2), new cjs.Rectangle(-12.1,-13.5,24.2,27.1), new cjs.Rectangle(-13,-14.5,26,29)];


(lib.Obstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#564634").s().p("AlyEGQgggJgmAFQgWADgLgRQgMgRgOgQQgDgDgBgEQgCgIAEgGIANgUQAEgGAEgBQANgFAOgCQAUgDARgQIACgCIAIACIANACQAIACAHADIAIADQAcAGAeAAQAJAAAHADIAIAEQANAEAPAAQAlgBAgAJQAEABAAADQADAagDAaIAAAGQgCAZgYABIgHABQgTACgVAAIgLABQgWAFgXAAQgbAAgbgHgAD2DWQg3gBg2gOQgGgeAJgRQAFgKAUgFQAFgCAEgCQAWgQAUgGIAegIIAWgGQAYgIAggGIAmAAQAJAAABgDQAGgOASgDIAHgDQAJgDAIAAQARACADgLQABgDADgCQAcgRAkgMQATgGARgJQAEgDAGAAQAdAAAdgDQAegDANAWQAEAHAHADIAUALIAKAGQAfARgDAhQgBALgGAPQgQADgNAKQgGAEgGAAQg0AAgvAJQgLADgJAGQgWAQgbACQgfACgcAEQgLACgKADQgXAIgaABQgFAAgEACQgFAEgEAAQgYAEgWAHQgbAJgmAAIgEAAgAP3CoQgHgEgCgHQgEgQACgRQABgGAAgGQgBgQAKgDQAagJAPgTIAGgFQAJgDAGgGQAFgDAEgBQAmgKAngEQADAMgCAOIgBAHQgCAIgEAHQgQAjgWAYQgNAPgWAOQgIAEgIABIgRABQgUAAgPgHgAyLCHQABgdACgdIABgGQACgIAEgIQAKgUgNgIIABgOIACgMQADgSAcAJIAGACQAlABAhAIIAMACIB6AFQAVgBAIAKQAFAGAHAFQADADADAKQACAJAAATQAAATgFAOQgFAPgQABQgrADgagSQgGgFgGAAQgXgBgYABQgIAAgIAEIgJAGQgEAFgGACQgbAMgfABQgPABgFAIQgDAFgGACQgHACgFAAQgMAAAAgNgAi0AmQgHgIgJgEQgJgEgIgCQgSgEgPgIIgQgHIgagJQgQgFgPgHQgLgEgJgGQgIgFgIgDQgfgIgKgVQgPgeAFgjQADgTANgRQAFgHAFgDQAvgUA4ABIAAABQAEAQASAEQAEABACADQAEAGADAAQAVAEAIAMQADAEADAAQALADAGAFQAqAqAdAnQAIAJABAPQABAdgCAcQAAAJgGACQgSAHgUACIgHAAQgNAAgFgGgANOAoQgdgMgkgBQgFAAgGgCQg8gbgWg2QgFgOgJgFQgDgBgBgJQgCgWAMgQQACgDAGgBIAMgDIAWgEIAJgGQBcAJBKAFQAEAAADAGQADAGANAGQAUAJACAfQACAjgCAiQgBADgDADQgSAPgWAEIgMACQgTABgMAKQgCACgDAAIgEgBgAr/AZQgFgBgEgCIgPgNQgEgFgGgDQgSgHgFgaQgBgGgDgHQgDgFgBgGQgGgcATABQATABALgFQAPgsAkgLQAHgBAGgGQArgmA9ACIAMABQAZgBAAAeIABAdQADAbAAAaQAAAOgDAOIgBAHQgDAPgLAAQgOABgLARQgEAGgHADQgTAJgVAEQgkAIgoAAIgRAAgAgShiQgDgKAAgMQAAgmAIgkQABgFAIgEQAUgLAOgMIALgCIAOgGQAKgFAMgBIB6gKQAYgCAXgEIAogGIAMgBIBRgFQAcgCAFARQACAIABAIIADAjIAEApQACATgKABQgYAEgXALQgSAIgWABQgOAAgOAFQgeAMgjABQhUAChVgCQgagBgVAIIgLACIgJABQgOAAgCgJg");
	this.shape.setTransform(-4.6,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D5942").s().p("AgOGEIgLAAIgGgGQgRgLABgRIg9AAIgRAbIgVAAIgBABQgHgHgFgKQgPgfgRgPIhjAHIgRAVIgcAAIgQANIgcAAIgbAVIgIAHQiugQibgdIjfiyQiIhriEB0QgEgCgCgGQgFgUgIgIIhDgVIghgjIgLhgQANAAAJgJQAKgJAMgDIAGgcIARgVIAFgqQARgLAWAFIAhAAIAFgBQAJgHADgNQAIAAAEgKQAGgNAPgFIAFgVIAfgQIB8gFIAcgVIAFgVIARgOIAIgSQBZgZBigTIAaAAIALAOQARAEASACQBSASBCgfIALgVIAUgNQANgFALgJQBDgIBGgEIAjAEQAfAlA/gJQDYgCDcABQDmABDEA0QDDA0DHgGIAaAjQANASAVgFIARAOIAbAAIARAVQASAAAQAFQAQAFAFALIALAiQAQgFAIAGQAOALABAeIAhAAIAtAVQADAPAFAMQAEAJAKgBQAKAJgFAZQgEAbgHAcIgcAVIgVAAIgGAVIgRAHQAAADgBACQgHAIgHAKIgHgCIheANQgCATgHAKQgJAOgPAHIgcAHQgKAEgEADQgIAGgLAAIgQAVIgiAOIiggHIgWAqQgOAIgHAIIgbAgIgDABIjBAAIgLgVIgyAHIgCALIgqgFIAQgEQgHAAgCgFQgJgQgaAFQgigBggAIIgIANQgzAIgtAgIiTAeQhNgRhRAKg");
	this.shape_1.setTransform(0.5,39.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Obstacle, rect = new cjs.Rectangle(-136,-0.3,273,79.1), [rect]);


(lib.Ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rest:0,boostleft:5,boostright:10,charging:15,explode:20,damage:30,speed:50});

	// timeline functions:
	this.frame_4 = function() {
		this.gotoAndStop("reset");
	}
	this.frame_9 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_14 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_19 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_29 = function() {
		this.gotoAndPlay("explode");
	}
	this.frame_49 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_84 = function() {
		this.gotoAndStop("rest");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(20).call(this.frame_49).wait(35).call(this.frame_84).wait(1));

	// Body
	this.instance = new lib.ShipGraphic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7B").s().p("AgdAWIAdg7IAeA7QgNAQgPAAQgOAAgRgQg");
	this.shape.setTransform(-2.1,-15.5,1,1,-20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AhAiaICBDHIgoBuIhZAAg");
	this.shape_1.setTransform(25,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7B").s().p("AhACbIAAk1ICBDHIgoBug");
	this.shape_2.setTransform(25,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AhAiaICBDHIgoBuIhZAAg");
	this.shape_3.setTransform(-26.5,20.3,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E7B").s().p("AhACbIAAk1ICBDHIgoBug");
	this.shape_4.setTransform(-26.5,20.3,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AgPAeQgDgIgDgIQgehMgphsQgCgEAHg8QAGg+AGABIBVBWIBMDJAhFEAQAIgTANghQAPgmAXg6QACgFACgFABeCLIg/Cd");
	this.shape_5.setTransform(2.3,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E7B").s().p("AglDDIBBicIAKAEIg5CfgAgdjHIAAgCIACAAIA5CNIgKADg");
	this.shape_6.setTransform(2.3,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag8gHIAAAAIALgcIAGACIAfANIARAHIA0AUIAEABIgLAcg");
	this.shape_7.setTransform(-0.2,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgTEUIA6ifIA3AWIg/CdgAhFEAIAVg0IAmhgIAEgKIAjAPIhCCcgAgVAOIhHi4QgCgEAHg8QAGg+AGABIBVBWIBMDJIg3AUIg6iLIgBAAIAAACIAxCNIgkAOIgGgQg");
	this.shape_8.setTransform(2.3,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(10).to({_off:false,alpha:0.301},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.301},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.301},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.301},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.301},0).wait(2).to({alpha:1},0).wait(2).to({startPosition:0},0).wait(1).to({y:-2.5},0).wait(1).to({y:-4.7},0).wait(1).to({y:-6.9},0).wait(1).to({y:-9.1},0).wait(1).to({y:-11.4},0).wait(1).to({y:-13.6},0).wait(1).to({y:-15.8},0).wait(1).to({y:-18},0).wait(1).to({y:-20.3},0).wait(1).to({y:-19.5},0).wait(1).to({y:-18.7},0).wait(1).to({y:-17.9},0).wait(1).to({y:-17.1},0).wait(1).to({y:-16.3},0).wait(1).to({y:-15.5},0).wait(1).to({y:-14.7},0).wait(1).to({y:-13.9},0).wait(1).to({y:-13.1},0).wait(1).to({y:-12.3},0).wait(1).to({y:-11.5},0).wait(1).to({y:-10.7},0).wait(1).to({y:-9.9},0).wait(1).to({y:-9.1},0).wait(1).to({y:-8.3},0).wait(1).to({y:-7.5},0).wait(1).to({y:-6.7},0).wait(1).to({y:-5.9},0).wait(1).to({y:-5.1},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.5},0).wait(1).to({y:-2.7},0).wait(1).to({y:-1.9},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.3},0).wait(1));

	// FX
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECEC59").s().p("AiBAPIAohjIDbCpg");
	this.shape_9.setTransform(27,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8F8C4").s().p("AgqArQgRgSAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape_10.setTransform(0,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D30000").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_11.setTransform(17,28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D30000").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_12.setTransform(10,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D30000").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");
	this.shape_13.setTransform(-6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D30000").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVg");
	this.shape_14.setTransform(-3,22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECEC59").s().p("AhGBGQgdgcAAgqQAAgoAdgeQAdgdApAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAQgpAAgdgeg");
	this.shape_15.setTransform(14,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECEC59").s().p("Ag/A/QgagaAAglQAAgkAagbQAagaAlAAQAmAAAaAaQAaAbAAAkQAAAlgaAaQgaAbgmAAQglAAgagbg");
	this.shape_16.setTransform(-9,33);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECEC59").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_17.setTransform(-22,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECEC59").s().p("Ag/A/QgagZAAgmQAAgkAagbQAagaAlAAQAmAAAaAaQAaAbAAAkQAAAmgaAZQgaAbgmAAQglAAgagbg");
	this.shape_18.setTransform(10,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE9C49").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape_19.setTransform(-10,8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE9C49").s().p("AhNBOQggghAAgtQAAgtAgggQAhggAsAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAQgsAAghggg");
	this.shape_20.setTransform(10,-13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE9C49").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAQgOATAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgTAAgQgPg");
	this.shape_21.setTransform(-19,24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE9C49").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_22.setTransform(-24,-5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE9C49").s().p("AgjAjQgOgOAAgVQAAgTAOgPQAPgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgUAAgPgPg");
	this.shape_23.setTransform(16,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE9C49").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVg");
	this.shape_24.setTransform(15,31);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE9C49").s().p("AhNBOQggggAAguQAAgsAgghQAgggAtAAQAtAAAhAgQAgAhAAAsQAAAuggAgQghAggtAAQgtAAggggg");
	this.shape_25.setTransform(-1,8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E626").s().p("AgjBUQgOgiAAgyQAAgwAOgkQAPgjAUAAQAUAAAPAjQAPAkAAAwQAAAygPAiQgPAkgUAAQgUAAgPgkg");
	this.shape_26.setTransform(0,19.7,0.64,1.024);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B50000").s().p("AgjBUQgOgiAAgyQAAgwAOgkQAPgjAUAAQAUAAAPAjQAPAkAAAwQAAAygPAiQgPAkgUAAQgUAAgPgkg");
	this.shape_27.setTransform(-0.1,23.3,1.13,1.427);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E626").s().p("AgdBXQgCgsAAgyQAAgzAJgkQAKgkAMAAQANAAAKAkQAJAkAAAzQAAAygQArQgPAsgNABIgBAAQgNAAgDgsg");
	this.shape_28.setTransform(0,19.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkgBAzQAAAyADAsQADAtAOgBQAMgBAQgsQAQgrAAgyQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_29.setTransform(0,22.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6E626").s().p("AAECAQgPgIgKgmQgKgmAAgxQAAgzAJgkQAKgkAMAAQANAAAJAkQAKAkAAAzQAAAxgGAuQgFAngNAAIgEgBg");
	this.shape_30.setTransform(0,17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkgBAzQAAAyALAmQAKAmAOAIQAQAIAHguQAGguAAgyQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_31.setTransform(0,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E6E626").s().p("AgaBXQgFghAAgzQAAgyAJgkQAKgkAMAAQANAAAKAkQAJAkAAAyQAAAzgPAgQgOAhgMABIAAAAQgMAAgFghg");
	this.shape_32.setTransform(0,15.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkgBAzQAAAyAFAhQAGAhAMAAQALgBAPghQAPggAAgyQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_33.setTransform(0,19.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E6E626").s().p("AAQB8QgRgNgPggQgPggAAgyQAAgzAJgkQAKgkAMAAQANAAAJAkQAKAkAAAzIAABfQABAjgKAAQgDAAgEgDg");
	this.shape_34.setTransform(0,15.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkgBAzQABAyAPAgQAPAgARANQARANgBgtIAAhfQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_35.setTransform(0,18.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E6E626").s().p("AgXBZQgIgiAAgyQAAgyAJgkQAKgkAMAAQANAAAKAkQAJAkAAAyQAAAygQAcQgQAbgHAHIgDABQgHAAgGgdg");
	this.shape_36.setTransform(0,13.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkgBAzQAAAyAIAiQAIAiAIgHQAHgGAQgcQARgbAAgyQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_37.setTransform(0,17.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6E626").s().p("AALB+QgLgGgMgwQgLgwgEgmQgEgnAJgkQAKgkAMAAQANAAAJAkQAJAkgCAzIgFBcQgBAkgKAAIgCAAg");
	this.shape_38.setTransform(0,12.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkAEAoQADAnAMAvQALAwALAFQAMAFACgpIAEhbQACgzgJglQgIgkgNAAQgNAAgKAkg");
	this.shape_39.setTransform(0,15.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E6E626").s().p("AgXBZQgIgkAAgyQAAgyAJgkQAKgkAMAAQANAAAKAkQAJAkAAAyQAAAygZAfQgYAgABAEg");
	this.shape_40.setTransform(0,10.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkgBAzQABAyAHAjIAHAgQgBgFAYgfQAZgfABgyQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_41.setTransform(0,14.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6E626").s().p("AgHBcQgRgpgEg0QgEg1AJgkQAKgkANAAQAMAAAJAkQAKAkAAAzQAAAxgKAkIgLAsIAAABQgDAAgOgjg");
	this.shape_42.setTransform(0.1,10.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B50000").s().p("AgoB5QgPgyAAhHQAAhGAPgyQASgyAWAAQAXAAAQAyQASAygBBGQABBHgSAyQgQAygXAAQgWAAgSgygAgWh6QgIAkAEA1QAEA1ARApQAQApABgHIALgsQAKgkAAgyQAAgzgKgkQgKgkgMAAQgNAAgKAkg");
	this.shape_43.setTransform(0,13.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E4DD24").s().p("AgWBXQgKgkAAgzQAAgzAKgkQAKgkAMAAQANAAAKAkQAKAkAAAzQAAAzgKAkQgKAlgNAAQgMAAgKglg");
	this.shape_44.setTransform(0,9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B50000").s().p("AgoB5QgPgzAAhGQAAhFAPgzQASgxAWgBQAXABAQAxQASAzgBBFQABBGgSAzQgQAxgXAAQgWAAgSgxgAgWh5QgKAkAAAzQAAAyAKAlQAKAlANAAQANAAAKglQAJglABgyQgBgzgJgkQgKgkgNAAQgNAAgKAkg");
	this.shape_45.setTransform(0,12.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E2D423").s().p("AgXBYQgKgkAAg0QAAgzAKglQAKglANAAQAOAAAKAlQAKAlAAAzQAAA0gKAkQgKAmgOAAQgNAAgKgmg");
	this.shape_46.setTransform(0,9.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B50000").s().p("AgoB4QgPgyAAhGQAAhFAPgzQASgxAWAAQAXAAAQAxQASAzgBBFQABBGgSAyQgQAygXAAQgWAAgSgygAgXh5QgKAlAAA0QAAAzAKAkQALAmANAAQANAAALgmQAJgkABgzQgBg0gJglQgLglgNAAQgNAAgLAlg");
	this.shape_47.setTransform(0,12.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E0CA21").s().p("AgYBZQgKglAAg0QAAg0AKglQALglANAAQAOAAAKAlQALAlAAA0QAAA0gLAlQgKAmgOAAQgNAAgLgmg");
	this.shape_48.setTransform(0,9.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B50000").s().p("AgoB3QgPgxAAhGQAAhFAPgyQASgxAWgBQAXABAQAxQASAygBBFQABBGgSAxQgQAzgXAAQgWAAgSgzgAgYh4QgKAlAAA1QAAAyAKAmQALAmAOAAQANAAALgmQALgmAAgyQAAg1gLglQgLgmgNAAQgOAAgLAmg");
	this.shape_49.setTransform(0,12.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DEC120").s().p("AgZBbQgKgmAAg1QAAg0AKgmQALgmAOABQAOgBALAmQALAmAAA0QAAA1gLAmQgLAmgOgBQgOABgLgmg");
	this.shape_50.setTransform(0,9.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B50000").s().p("AgoB3QgPgxAAhGQAAhEAPgyQASgyAWAAQAXAAAQAyQASAygBBEQABBGgSAxQgQAygXAAQgWAAgSgygAgZh4QgKAmAAA1QAAA0AKAmQAMAmAOgBQAOABALgmQALgmgBg0QABg1gLgmQgLgmgOABQgOgBgMAmg");
	this.shape_51.setTransform(0,12.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DCB81E").s().p("AgZBbQgLgmAAg1QAAg1ALgmQALgmAOAAQAPAAALAmQALAmAAA1QAAA1gLAmQgLAngPAAQgOAAgLgng");
	this.shape_52.setTransform(0,10);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B50000").s().p("AgoB3QgPgxAAhGQAAhEAPgyQASgxAWAAQAXAAAQAxQASAygBBEQABBGgSAxQgQAxgXAAQgWAAgSgxgAgZh3QgKAmAAA1QAAA1AKAmQALAmAPAAQAOAAAMgmQALgmgBg1QABg1gLgmQgMgmgOAAQgPAAgLAmg");
	this.shape_53.setTransform(0,12.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DAAF1D").s().p("AgbBcQgKgmAAg2QAAg1AKgnQAMgmAPAAQAQAAAKAmQAMAnAAA1QAAA2gMAmQgKAngQAAQgPAAgMgng");
	this.shape_54.setTransform(0,10.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B50000").s().p("AgoB2QgPgwAAhGQAAhEAPgyQASgxAWAAQAXAAAQAxQASAygBBEQABBGgSAwQgQAygXAAQgWAAgSgygAgah3QgKAmAAA3QAAA1AKAmQAMAnAPAAQAPAAALgnQALgmAAg1QAAg3gLgmQgLgngPAAQgPAAgMAng");
	this.shape_55.setTransform(0,13);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D8A61B").s().p("AgbBdQgLgnAAg2QAAg2ALgnQAMgnAPAAQAQAAALAnQAMAnAAA2QAAA2gMAnQgLAngQAAQgPAAgMgng");
	this.shape_56.setTransform(0,10.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B50000").s().p("AgoB2QgPgxAAhFQAAhEAPgxQASgxAWAAQAXAAAQAxQASAxgBBEQABBFgSAxQgQAxgXAAQgWAAgSgxgAgah2QgLAmAAA3QAAA2ALAmQAMAoAPAAQAPAAAMgoQALgmAAg2QAAg3gLgmQgMgngPAAQgPAAgMAng");
	this.shape_57.setTransform(0,13.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D69C1A").s().p("AgcBfQgLgoAAg3QAAg2ALgnQANgoAPAAQAQAAAMAoQAMAnAAA2QAAA3gMAoQgMAngQAAQgPAAgNgng");
	this.shape_58.setTransform(0,10.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B50000").s().p("AgoB2QgPgxAAhFQAAhEAPgxQASgxAWAAQAXAAAQAxQASAxgBBEQABBFgSAxQgQAxgXAAQgWAAgSgxgAgbh2QgLAoAAA3QAAA2ALAnQAMAoAQAAQAPAAAMgoQAMgnAAg2QAAg3gMgoQgMgngPAAQgQAAgMAng");
	this.shape_59.setTransform(0,13.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D49318").s().p("AgcBfQgMgnAAg4QAAg3AMgoQAMgnAQAAQARAAAMAnQAMAoAAA3QAAA4gMAnQgMAogRAAQgQAAgMgog");
	this.shape_60.setTransform(0,11.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B50000").s().p("AgoB1QgPgwAAhFQAAhEAPgxQASgwAWAAQAXAAAQAwQASAxgBBEQABBFgSAwQgQAxgXAAQgWAAgSgxgAgch2QgMAoAAA4QAAA3AMAnQANAoAQAAQAQAAAMgoQAMgnAAg3QAAg4gMgoQgMgngQAAQgQAAgNAng");
	this.shape_61.setTransform(0,13.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D28A17").s().p("AgdBgQgMgoAAg4QAAg3AMgoQANgpAQAAQARAAAMApQANAoAAA3QAAA4gNAoQgMApgRAAQgQAAgNgpg");
	this.shape_62.setTransform(0,11.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B50000").s().p("AgoB0QgPgvAAhFQAAhEAPgxQASgvAWgBQAXABAQAvQASAxgBBEQABBFgSAvQgQAygXAAQgWAAgSgygAgch1QgNAoAAA4QAAA3ANApQAMAoARAAQAQAAAMgoQANgpAAg3QAAg4gNgoQgMgogQAAQgRAAgMAog");
	this.shape_63.setTransform(0,13.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D08115").s().p("AgeBhQgMgoAAg5QAAg4AMgoQANgpARAAQARAAANApQANAoAAA4QAAA5gNAoQgNApgRAAQgRAAgNgpg");
	this.shape_64.setTransform(0,11.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B50000").s().p("AgoB1QgPgxAAhEQAAhDAPgwQASgxAWAAQAXAAAQAxQASAwgBBDQABBEgSAxQgQAwgXAAQgWAAgSgwgAgdh0QgMAogBA5QABA4AMAoQANApARAAQAQAAANgpQANgoAAg4QAAg5gNgoQgNgpgQAAQgRAAgNApg");
	this.shape_65.setTransform(0,13.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CE7814").s().p("AgeBiQgNgpAAg5QAAg5ANgpQANgoARAAQASAAANAoQANApAAA5QAAA5gNApQgNApgSAAQgRAAgNgpg");
	this.shape_66.setTransform(0,11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B50000").s().p("AgoB0QgPgwAAhEQAAhDAPgwQASgwAWAAQAXAAAQAwQASAwgBBDQABBEgSAwQgQAwgXAAQgWAAgSgwgAgeh0QgNApAAA5QAAA5ANAoQANAqASAAQARAAANgqQANgoAAg5QAAg5gNgpQgNgpgRAAQgSAAgNApg");
	this.shape_67.setTransform(0,13.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CD6E12").s().p("AgfBjQgNgpAAg6QAAg5ANgpQAOgqARAAQASAAANAqQAOApAAA5QAAA6gOApQgNAqgSAAQgRAAgOgqg");
	this.shape_68.setTransform(0,12.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B50000").s().p("AgoBzQgPgvAAhEQAAhCAPgxQASgwAWAAQAXAAAQAwQASAxgBBCQABBEgSAvQgQAxgXAAQgWAAgSgxgAgfh0QgNAqAAA6QAAA5ANApQAOApARAAQASAAANgpQAOgpAAg5QAAg6gOgqQgNgpgSAAQgRAAgOApg");
	this.shape_69.setTransform(0,13.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CB6511").s().p("AggBkQgNgqAAg6QAAg6ANgqQAOgpASAAQATAAANApQAOAqAAA6QAAA6gOAqQgNAqgTAAQgSAAgOgqg");
	this.shape_70.setTransform(0,12.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B50000").s().p("AgoBzQgPgwAAhDQAAhCAPgxQASgvAWAAQAXAAAQAvQASAxgBBCQABBDgSAwQgQAwgXAAQgWAAgSgwgAgghzQgNAqABA6QgBA6ANApQAOAqASAAQATAAANgqQAOgpAAg6QAAg6gOgqQgNgqgTAAQgSAAgOAqg");
	this.shape_71.setTransform(0,14);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C95C0F").s().p("AghBlQgNgpAAg8QAAg6ANgqQAPgqASgBQATABAOAqQAOAqAAA6QAAA8gOApQgOAqgTABQgSgBgPgqg");
	this.shape_72.setTransform(0,12.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B50000").s().p("AgoBzQgPgwAAhDQAAhCAPgwQASgwAWAAQAXAAAQAwQASAwgBBCQABBDgSAwQgQAwgXAAQgWAAgSgwgAghhzQgNArABA7QgBA6ANAqQAPAqASAAQATAAAOgqQAOgqAAg6QAAg7gOgrQgOgqgTAAQgSAAgPAqg");
	this.shape_73.setTransform(0,14.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C7530E").s().p("AghBmQgOgqAAg8QAAg7AOgqQAOgrATAAQATAAAOArQAPAqAAA7QAAA8gPAqQgOArgTAAQgTAAgOgrg");
	this.shape_74.setTransform(0,12.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B50000").s().p("AgoByQgPgvAAhDQAAhCAPgvQASgwAWAAQAXAAAQAwQASAvgBBCQABBDgSAvQgQAwgXAAQgWAAgSgwgAghhyQgNArAAA7QAAA7ANAqQAPArASAAQAUAAAOgrQAOgqAAg7QAAg7gOgrQgOgqgUAAQgSAAgPAqg");
	this.shape_75.setTransform(0,14.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C54A0C").s().p("AgiBnQgOgrAAg8QAAg8AOgqQAPgrATAAQAUAAAOArQAPAqAAA8QAAA8gPArQgOArgUAAQgTAAgPgrg");
	this.shape_76.setTransform(0,13.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B50000").s().p("AgoByQgPgwAAhCQAAhBAPgxQASguAWgBQAXABAQAuQASAxgBBBQABBCgSAwQgQAvgXABQgWgBgSgvgAgihyQgNArAAA9QAAA6ANArQAPAsATAAQAUAAAOgsQAPgrAAg6QAAg9gPgrQgOgqgUgBQgTABgPAqg");
	this.shape_77.setTransform(0,14.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C3400B").s().p("AgjBoQgOgrAAg9QAAg7AOgtQAPgqAUAAQAUAAAPAqQAPAtAAA7QAAA9gPArQgPArgUAAQgUAAgPgrg");
	this.shape_78.setTransform(0,13.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B50000").s().p("AgoByQgPgwAAhCQAAhBAPgwQASgvAWAAQAXAAAQAvQASAwgBBBQABBCgSAwQgQAvgXAAQgWAAgSgvgAgjhyQgOAtAAA8QAAA8AOArQAQArATAAQAVAAAOgrQAPgrAAg8QAAg8gPgtQgOgqgVAAQgTAAgQAqg");
	this.shape_79.setTransform(0,14.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C13709").s().p("AgjBpQgPgsAAg9QAAg8APgsQAPgsAUAAQAVAAAPAsQAPAsAAA8QAAA9gPAsQgPAsgVAAQgUAAgPgsg");
	this.shape_80.setTransform(0,13.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B50000").s().p("AgoBxQgPgvAAhCQAAhBAPgvQASgvAWAAQAXAAAQAvQASAvgBBBQABBCgSAvQgQAvgXAAQgWAAgSgvgAgjhxQgPAsAAA9QAAA9APArQAPAsAUAAQAVAAAPgsQAPgrAAg9QAAg9gPgsQgPgrgVAAQgUAAgPArg");
	this.shape_81.setTransform(0,14.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BF2E08").s().p("AgkBqQgPgsAAg+QAAg9APgsQAPgsAVAAQAVAAAPAsQAQAsAAA9QAAA+gQAsQgPAsgVAAQgVAAgPgsg");
	this.shape_82.setTransform(0,14);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B50000").s().p("AgoBwQgPguAAhCQAAhBAPgvQASgvAWAAQAXAAAQAvQASAvgBBBQABBCgSAuQgQAwgXAAQgWAAgSgwgAgkhxQgPAtAAA+QAAA9APAsQAPAsAVAAQAVAAAPgsQAQgsAAg9QAAg+gQgtQgPgsgVAAQgVAAgPAsg");
	this.shape_83.setTransform(0,14.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BD2506").s().p("AgkBrQgPgtgBg+QABg9APgtQAQgtAUAAQAVAAAQAtQAQAtAAA9QAAA+gQAtQgQAtgVAAQgUAAgQgtg");
	this.shape_84.setTransform(0,14.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B50000").s().p("AgoBwQgPguAAhCQAAhBAPgvQASguAWAAQAXAAAQAuQASAvgBBBQABBCgSAuQgQAvgXAAQgWAAgSgvgAgkhwQgPAtgBA+QABA+APAsQAQAtAUAAQAVAAAQgtQAQgsAAg+QAAg+gQgtQgQgsgVAAQgUAAgQAsg");
	this.shape_85.setTransform(0,14.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BB1C05").s().p("AglBsQgPgtgBg/QABg+APgtQAQgtAVAAQAWAAAPAtQAQAtABA+QgBA/gQAtQgPAtgWAAQgVAAgQgtg");
	this.shape_86.setTransform(0,14.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B50000").s().p("AgoBwQgPguAAhCQAAhAAPgvQASgvAWAAQAXAAAQAvQASAvgBBAQABBCgSAuQgQAvgXAAQgWAAgSgvgAglhvQgPAtgBA/QABA+APAsQAQAuAVAAQAWAAAPguQAQgsABg+QgBg/gQgtQgPgtgWAAQgVAAgQAtg");
	this.shape_87.setTransform(0,14.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B91203").s().p("AgmBtQgPgtAAhAQAAg+APguQARgtAVAAQAWAAAQAtQARAuAAA+QAABAgRAtQgQAtgWAAQgVAAgRgtg");
	this.shape_88.setTransform(0,14.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B50000").s().p("AgoBvQgPgtAAhCQAAhAAPgvQASguAWAAQAXAAAQAuQASAvgBBAQABBCgSAtQgQAvgXAAQgWAAgSgvgAgmhvQgPAuAAA/QAAA/APAtQARAtAVABQAWgBAQgtQARgtAAg/QAAg/gRguQgQgtgWAAQgVAAgRAtg");
	this.shape_89.setTransform(0,15.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B70902").s().p("AgnBuQgPgtAAhBQAAg/APguQARguAWAAQAXAAAQAuQAQAuAAA/QAABBgQAtQgQAugXAAQgWAAgRgug");
	this.shape_90.setTransform(0,15);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B50000").s().p("AgoBvQgPguAAhBQAAhAAPguQASgvAWAAQAXAAAQAvQASAugBBAQABBBgSAuQgQAvgXAAQgWAAgSgvgAgnhuQgPAuAABAQAAA/APAtQARAuAWAAQAXAAAQguQAQgtAAg/QAAhAgQguQgQgugXAAQgWAAgRAug");
	this.shape_91.setTransform(0,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9,p:{skewY:0,x:27}}]},5).to({state:[{t:this.shape_9,p:{skewY:180,x:-27}}]},5).to({state:[{t:this.shape_10}]},5).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:15,y:31,scaleX:1,scaleY:1}},{t:this.shape_23,p:{x:16,y:3}},{t:this.shape_22,p:{rotation:0,x:-24,y:-5}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:10,y:-13}},{t:this.shape_19,p:{x:-10,y:8}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:10,y:-2}},{t:this.shape_17,p:{x:-22,y:2,scaleX:1,scaleY:1}},{t:this.shape_16,p:{scaleY:1,x:-9,y:33}},{t:this.shape_15,p:{y:16}},{t:this.shape_14},{t:this.shape_13,p:{x:-6,y:0,scaleY:1}},{t:this.shape_12,p:{x:10,y:10}},{t:this.shape_11,p:{x:17,y:28}}]},5).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:28,y:4,scaleX:1,scaleY:1}},{t:this.shape_23,p:{x:16,y:3}},{t:this.shape_22,p:{rotation:0,x:-24,y:-5}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:2,scaleY:1.727,x:10,y:-13}},{t:this.shape_19,p:{x:-18,y:1}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:10,y:-2}},{t:this.shape_17,p:{x:-14,y:13,scaleX:1,scaleY:1}},{t:this.shape_16,p:{scaleY:1.444,x:-16,y:22}},{t:this.shape_15,p:{y:16}},{t:this.shape_14},{t:this.shape_13,p:{x:-12,y:-5,scaleY:1}},{t:this.shape_12,p:{x:16,y:3}},{t:this.shape_11,p:{x:4,y:34}}]},2).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:15,y:31,scaleX:1,scaleY:1}},{t:this.shape_23,p:{x:16,y:3}},{t:this.shape_22,p:{rotation:16.2,x:-19,y:-10.1}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:1.455,scaleY:1.455,x:19,y:-8}},{t:this.shape_19,p:{x:7,y:35}},{t:this.shape_18,p:{scaleX:1.333,scaleY:1.556,x:10,y:-2}},{t:this.shape_17,p:{x:-22,y:2,scaleX:2.5,scaleY:1.5}},{t:this.shape_16,p:{scaleY:1,x:-9,y:33}},{t:this.shape_15,p:{y:16}},{t:this.shape_14},{t:this.shape_13,p:{x:0,y:12,scaleY:1.429}},{t:this.shape_12,p:{x:10,y:10}},{t:this.shape_11,p:{x:-18,y:14}}]},2).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:15,y:31,scaleX:1,scaleY:1}},{t:this.shape_23,p:{x:16,y:3}},{t:this.shape_22,p:{rotation:0,x:-24,y:-5}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:10,y:-13}},{t:this.shape_19,p:{x:-10,y:8}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:10,y:-2}},{t:this.shape_17,p:{x:-22,y:2,scaleX:1,scaleY:1}},{t:this.shape_16,p:{scaleY:1,x:-9,y:33}},{t:this.shape_15,p:{y:16}},{t:this.shape_14},{t:this.shape_13,p:{x:-6,y:0,scaleY:1}},{t:this.shape_12,p:{x:10,y:10}},{t:this.shape_11,p:{x:17,y:28}}]},2).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:12.7,y:28.9,scaleX:2,scaleY:2.143}},{t:this.shape_23,p:{x:15,y:14}},{t:this.shape_22,p:{rotation:0,x:-17,y:10}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:10,y:-13}},{t:this.shape_19,p:{x:-7,y:-6}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:2,y:7}},{t:this.shape_17,p:{x:-22,y:-6,scaleX:1.5,scaleY:1.75}},{t:this.shape_16,p:{scaleY:1,x:1,y:35}},{t:this.shape_15,p:{y:-5}},{t:this.shape_14},{t:this.shape_13,p:{x:-11,y:14,scaleY:1}},{t:this.shape_11,p:{x:10,y:-15}}]},2).to({state:[]},2).to({state:[{t:this.shape_27,p:{y:23.3,scaleY:1.427}},{t:this.shape_26,p:{y:19.7}}]},20).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_27,p:{y:12.3,scaleY:1.427}},{t:this.shape_26,p:{y:8.7}}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_27,p:{y:15.3,scaleY:1.308}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-27.2,39,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-19.5,-27.2,59.5,56.3), rect, rect, rect, rect, rect=new cjs.Rectangle(-40,-27.2,59.5,56.3), rect, rect, rect, rect, rect=new cjs.Rectangle(-19.5,-27.2,39,59.3), rect, rect, rect, rect, rect=new cjs.Rectangle(-34,-26.4,66.5,68.4), rect, rect=new cjs.Rectangle(-34,-32,69,72), rect, rect=new cjs.Rectangle(-34,-26.4,69.1,74.4), rect, rect=new cjs.Rectangle(-34,-26.4,66.5,68.4), rect, rect=new cjs.Rectangle(-34,-26.4,66.5,70.4), rect, rect=new cjs.Rectangle(-19.5,-27.2,39,54), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-19.5,-27.2,39,67.7), new cjs.Rectangle(-19.5,-29.4,39,68.7), new cjs.Rectangle(-19.5,-31.6,39,69.6), new cjs.Rectangle(-19.5,-33.9,39,70.7), new cjs.Rectangle(-19.5,-36.1,39,71.6), new cjs.Rectangle(-19.5,-38.3,39,72.7), new cjs.Rectangle(-19.5,-40.5,39,73.6), new cjs.Rectangle(-19.5,-42.8,39,74.7), new cjs.Rectangle(-19.5,-45,39,75.6), new cjs.Rectangle(-19.5,-47.2,39,76.7), new cjs.Rectangle(-19.5,-46.4,39,75.9), new cjs.Rectangle(-19.5,-45.6,39,75.2), new cjs.Rectangle(-19.5,-44.8,39,74.5), new cjs.Rectangle(-19.5,-44,39,73.7), new cjs.Rectangle(-19.5,-43.2,39,73), new cjs.Rectangle(-19.5,-42.4,39,72.3), new cjs.Rectangle(-19.5,-41.6,39,71.5), new cjs.Rectangle(-19.5,-40.8,39,70.8), new cjs.Rectangle(-19.5,-40,39,70.1), new cjs.Rectangle(-19.5,-39.2,39,69.3), new cjs.Rectangle(-19.5,-38.4,39,68.6), new cjs.Rectangle(-19.5,-37.6,39,67.8), new cjs.Rectangle(-19.5,-36.8,39,67.1), new cjs.Rectangle(-19.5,-36,39,66.4), new cjs.Rectangle(-19.5,-35.2,39,65.6), new cjs.Rectangle(-19.5,-34.4,39,64.9), new cjs.Rectangle(-19.5,-33.6,39,64.2), new cjs.Rectangle(-19.5,-32.8,39,63.4), new cjs.Rectangle(-19.5,-32,39,62.7), new cjs.Rectangle(-19.5,-31.2,39,62), new cjs.Rectangle(-19.5,-30.4,39,61.2), new cjs.Rectangle(-19.5,-29.6,39,60.5), new cjs.Rectangle(-19.5,-28.8,39,59.7), new cjs.Rectangle(-19.5,-28,39,59), new cjs.Rectangle(-19.5,-27.2,39,58.3)];


(lib.TitleScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.scoreDisplay = new cjs.Text("0", "bold 33px 'Unispace'", "#B50000");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.textAlign = "right";
	this.scoreDisplay.lineHeight = 42;
	this.scoreDisplay.lineWidth = 167;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(386,299.2);

	this.scoreLabel = new cjs.Text("SCORE", "bold 33px 'Unispace'", "#E6E626");
	this.scoreLabel.name = "scoreLabel";
	this.scoreLabel.textAlign = "right";
	this.scoreLabel.lineHeight = 42;
	this.scoreLabel.lineWidth = 102;
	this.scoreLabel.parent = this;
	this.scoreLabel.setTransform(386.4,263.2);

	this.timeLabel = new cjs.Text("TIME", "bold 33px 'Unispace'", "#E6E626");
	this.timeLabel.name = "timeLabel";
	this.timeLabel.textAlign = "right";
	this.timeLabel.lineHeight = 42;
	this.timeLabel.lineWidth = 81;
	this.timeLabel.parent = this;
	this.timeLabel.setTransform(386.4,172.2);

	this.timeDisplay = new cjs.Text("0:00", "bold 33px 'Unispace'", "#B50000");
	this.timeDisplay.name = "timeDisplay";
	this.timeDisplay.textAlign = "right";
	this.timeDisplay.lineHeight = 42;
	this.timeDisplay.lineWidth = 167;
	this.timeDisplay.parent = this;
	this.timeDisplay.setTransform(386,207.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.timeDisplay},{t:this.timeLabel},{t:this.scoreLabel},{t:this.scoreDisplay}]}).wait(1));

	// titles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4040A6").s().p("ANRINQgvgqgGhUIB0AAQAAAoAXATQAWAVArAAQAkAAAUgNQAUgMAAgVQAAgLgEgJQgFgJgJgEQgNgHgzgQQgygOgjgOQgzgUgaghQgaghAAgrQAAhEAzgnQAxgnBXAAQBUAAAyApQAxAqAABGIhwAAQgFgggTgQQgTgPgkAAQgdAAgSALQgSAMAAASQAAAgBWAcIAYAHIAFACQBYAcAXASQAWASAMAaQAMAYgBAfQABBGg2AnQg2AnhggBQhbAAgwgpgAVMIpIAAl0IiGAAIAAhfIGDAAIAABfIiFAAIAAF0gAKEIpIgchVIicAAIgbBVIh8AAIConTICDAAIClHTgAHpFzIBlAAIg0ihgAgoIpIAAnTIB3AAIAAFvIDjAAIAABkgAoFIpIAAnTIDjAAQBSAAAnAdQAnAdAAA9QAAAmgSAZQgRAZgkANQApALAWAbQAVAbABAoQAAAngSAgQgTAgggASQgVALggAFQgfAGhBgBgAmSHNIBbAAQAqAAASgMQAQgNAAgbQAAgagPgMQgRgNghgBIhmAAgAmSENIBhAAQAdAAAQgMQAPgLgBgXQABgVgOgKQgOgLgcAAIhlAAgAg8hyQgvgqgGhUIByAAQABAoAWATQAWAVAsAAQAkAAAUgNQAUgMAAgWQAAgKgFgJQgFgJgIgEQgNgIgzgPQgygOgjgOQgygUgaghQgbghAAgrQAAhEAzgnQAygnBVAAQBUAAAyApQAyAqgBBGIhwAAQgEgggTgQQgTgPgkAAQgdAAgSAMQgTALABASQAAAgBVAcIAZAHIAEACQBZAcAWASQAXATAMAZQALAZAAAeQAABGg1AnQg2AmhhAAQhaAAgvgpgAo5iLQg/hCAAhyQAAhxA/hDQA/hCBsAAQBsAABABCQBABDgBBxQABByhABCQhABChsAAQhsAAg/hCgAnhmsQgeAmABBHQgBBIAeAlQAdAnA2AAQA3AAAdgnQAdglABhIQgBhHgdgmQgdgng3ABQg2AAgdAmgAxDiLQg/hCAAhyQAAhxA/hDQA/hCBsAAQBsAABABCQBABDgBBxQABByhABCQhABChsAAQhsAAg/hCgAvrmsQgeAmABBHQgBBIAeAlQAdAnA2AAQA3AAAdgnQAdglABhIQgBhHgdgmQgdgng3ABQg2AAgdAmgAW2hVQgIgZgCgsIgCg2QgEgbgPgMQgPgOggAAIhPAAIAACwIh4AAIAAnUIDgAAQBZAAAqAfQAqAhAABCQAAAogSAcQgRAcgnASQAgANAMAUQAMAUADAzIACAmQABA5ASAIIAAARgAUZlhIBYAAQAlAAARgNQAQgOAAgdQAAgZgQgMQgQgOgiAAIhcAAgALwhVIAAnUIFjAAIAABgIjsAAIAABTIDYAAIAABdIjYAAIAABkID0AAIAABggAG9hVIAAl1IiGAAIAAhfIGEAAIAABfIiGAAIAAF1gA5IhVIAAnUIDiAAQBSAAAnAdQAnAeAAA8QAAAngRAYQgSAYgjAOQApALAVAbQAWAbgBAoQABAngTAgQgRAgghARQgVAMggAFQgfAGhBAAgA3WiyIBbAAQArAAAQgMQARgMAAgcQABgagRgMQgQgNgggBIhnAAgA3WlyIBgAAQAeAAAPgMQAPgLABgXQgBgVgOgKQgOgMgaAAIhmAAg");
	this.shape.setTransform(227.4,83.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ship
	this.instance = new lib.Ship("single",55);
	this.instance.parent = this;
	this.instance.setTransform(185.6,262.9,7.205,7.205,-40.8,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B50000").ss(1,1,1).p("Af9AAMg/5AAA");
	this.shape_1.setTransform(198,147.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131313").s().p("A/UfVMAAAg+pMA+pAAAMAAAA+pg");
	this.shape_2.setTransform(200,200,0.998,0.998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TitleScreen, rect = new cjs.Rectangle(-7.5,0,411,454.2), [rect]);


// stage content:
(lib.my1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var c, w, h, s, d, isExplode, isImmune, isBoost, isPlaying, startTime, currentTime, timeDiaplayString, increaseDifficulty, titleScreen;
		var backGround, starField1, starField2, spaceCorridor1, spaceCorridor2;
		var hud, shieldBar, pointsDisplay;
		var game, ship, shields, obstacles, nextObstacles, pickups, nextPickup, currentPoints;
		//touch
		var isTouch, isSwiped, swipedEndTime, swipedStopMilisecond = 200;
		var touchstartX = 0, touchstartY = 0, touchendX = 0, touchendY = 0;
		//touch^^^
		
		function init() {
			c = createjs;
			//w = stage.canvas.width;
			//h = stage.canvas.height;
			w = 400;
			h = 400;
			 currentPoints = 0;
			isTouch = false;
			isSwiped = false;
		
			
			
			
			buildBackground();
			
			game = new c.Container();
			stage.addChild(game);
			
			buildPickups();
			buildObstacles();
			buildShip();
			buildHUD();
			buildTitleScreen();
			
			circle = new createjs.Shape();
			
			c.Ticker.on("tick", gameLoop);
			stage.on("stagemousedown", handleMouseClick);
			window.addEventListener("keydown", handleKeyPress);
			
			c.Touch.enable(stage, true, false);
			if(c.Touch.isSupported()){
				stage.enableMouseOver(10);
				stage.mouseMoveOutside = true;
				stage.on("stagemousedown",touchDownHandler);
				stage.on("stagemousemove",touchMoveHandler);
				stage.on("stagemouseup",touchUpHandler);
			}else{
				console.log("touch does'n supported");
			}
			
			
			stage.update();
		}
		
		function touchDownHandler(event) {
			isTouch = true;
			touchstartX = event.stageX;
		    //touchstartY = event.stageY;
		}
		
		function touchMoveHandler (event) {
			console.log("stagemousemove");
			if (isSwiped) {
				console.log("isSwiped");
				
				var currentTime = (new Date()).getTime();
				var timePass = (currentTime - swipedEndTime);
				if (timePass > swipedStopMilisecond){
					isSwiped = false;
					console.log("stop");
				}else{
					console.log("not stop");
					touchstartX = event.stageX;
					swipedEndTime = (new Date()).getTime();
				}
			}
			touchendX = event.stageX;
			var vectorTouchX = Math.abs(touchendX - touchstartX);
			console.log(isSwiped+ " " + vectorTouchX);
			if (!isSwiped && vectorTouchX > 40) {
				console.log("handleGesure");
				handleGesure();
				if (isSwiped) {
					touchstartX = event.stageX;
					swipedEndTime = (new Date()).getTime();
				}
			}
			
		}
		
		function touchUpHandler (event) {
			console.log("stagemouseup");	
			touchendX = event.stageX;
		    //touchendY = event.stageY;
		    isTouch = false;
			isSwiped = false;
		}
		
		function handleGesure() {
			if (checkBoost()) {
				if (touchendX < touchstartX) { //left
					boostLeft();
					isSwiped = true;
				}
				if (touchendX > touchstartX) { //right
					boostRight();
					isSwiped = true;
				}
			}
		    /*if (touchendY > touchstartY) {
		        console.log(swiped + 'down!');
		    }
		    if (touchendY < touchstartY) {
		        console.log(swiped + 'up!');
		    }
		    if (touchendY == touchstartY &&
				touchendX == touchstartX) {
		        console.log('tap!');
		    }*/
		}
		
		function gameLoop(e) {
			//console.log(w);
			
			if (isPlaying) {
				
				if (shields == 0 && !isExplode) {
					
					setTimeout(endGame, 1000);
					ship.gotoAndPlay("explode");
					c.Sound.play("Death");
					isExplode = true;
					//game over
				}
				
				currentTime = (new Date()).getTime();
				var time = Math.floor((currentTime - startTime) / 1000);
				timeDiaplayString = convertTime(time);
				
				var seconds = time % 60 + "";
				if (seconds == "20" || seconds == "40" || seconds == "60") {
					if (increaseDifficulty) {
						increaseDifficulty = false;
						d += 0.35;
						ship.gotoAndPlay("speed");
					}
				} else {
					increaseDifficulty = true;
				}
				
				pointsDisplay.text = currentPoints;
				
				var actualSpeed = s * (d+1);
				
				performShipMovements();
				performPickupMovements(actualSpeed);
				performObstacleMovements(actualSpeed);
				performBackgroundMovements(actualSpeed);
			}
		}
		
		function performPickupMovements(a) {
			if((nextPickup -= a) < 0) {
				addPickups();
			}
			for(var i = pickups.numChildren - 1; i >=0; i--) {
				var shield = pickups.getChildAt(i);
				shield.y += a / 2;
				if(shield.y > h + 300) {
					pickups.removeChild(shield);
				}
				var shieldGTL = shield.globalToLocal(0, 0);
				var shipGTL = ship.globalToLocal(0, 0);
				if (shieldGTL.x < shipGTL.x + ship.nominalBounds.width &&
					shieldGTL.x + shield.nominalBounds.width > shipGTL.x &&
					shieldGTL.y < shipGTL.y + ship.nominalBounds.height &&
					shield.nominalBounds.height + shieldGTL.y > shipGTL.y) {
						currentPoints += 5;
						shieldsPickup();
						pickups.removeChild(shield);
				}
			}
		}
		
		function shieldsPickup(a) {
			if(shields < 3){
				shields++;
				shieldBar.gotoAndStop(shields);
			}
			c.Sound.play("Pickup");
		}
		
		function performObstacleMovements(a) {
			if((nextObstacle -= a) < 0) {
				addObstacle();
			}
			for(var i = obstacles.numChildren - 1; i >=0; i--) {
				var obstacle = obstacles.getChildAt(i);
				obstacle.y += a;
				if(obstacle.y > h + 300) {
					obstacles.removeChild(obstacle);
				}
			}
			var obstacleTarget = obstacles.getObjectUnderPoint(ship.x, ship.y, i);
			if (obstacleTarget) {
				damage();
			}
		}
		
		function damage() {
			if (shields > 0 && !isImmune){
				isImmune = true;
				shields--;
				shieldBar.gotoAndStop(shields);
				ship.gotoAndPlay("damage");
				c.Sound.play("Damage");
				setTimeout(removeImmunity, 400);
			}
		}
		
		function removeImmunity() {
			isImmune = false;
		}
		
		function performShipMovements() {
			if (ship.x < w /2) {
				ship.x = Math.floor(ship.x + 1);
			}else if (ship.x > w / 2) {
				ship.x = Math.floor(ship.x - 1);
			}else{
				ship.x = w / 2;
			}
		}
		
		function handleMouseClick(e) {
			if (!isPlaying){
				startGame();
			}
		}
		
		function handleKeyPress(e) {
			if (checkBoost()) {
				if (e.keyCode == 37 || e.keyCode == 65) {
					boostLeft();
				} else if (e.keyCode == 39 || e.keyCode == 68) {
					boostRight();
				}
			}
			e.preventDefault();
		}
		
		function checkBoost() {
			var res = false;
			if (isPlaying && !isExplode) {
				//console.log(e.keyCode);
				if (isBoost){
					ship.gotoAndPlay("charging")
					c.Sound.play("Charging");
				}else{
					res = true;
				}
			}
			return res;
		}
		
		function boostLeft(){
			var newPosition = ship.x - 120;
			
			if (newPosition <= 0) {
				newPosition = 0;
			}else{
				c.Tween.get(backGround, {
					override:true
				}).to({
					x: backGround.x + 20
				}, 1000, c.Ease.linear);
			}
			
			c.Tween.get(ship, {
				override:true
				}).to({
					x:newPosition
				}, 1200, c.Ease.quintOut).call(boostComplete);
			ship.gotoAndPlay("boostleft");
				
			c.Sound.play("Booster", 0, 0, 200);
			
			isBoost = true;
		}
		
		function boostRight(){
			var newPosition = ship.x + 120;
			
			if (newPosition >= w) {
				newPosition = w;
			}else{
				c.Tween.get(backGround, {
					override:true
				}).to({
					x: backGround.x - 20
				}, 1000, c.Ease.linear);
			}
			
			c.Tween.get(ship, {
				override:true
				}).to({
					x:newPosition
				}, 1200, c.Ease.quintOut).call(boostComplete);
			ship.gotoAndPlay("boostright");
			
			c.Sound.play("Booster", 0, 0, 200);
			
			isBoost = true;
		}
		
		function boostComplete() {
			isBoost = false;
		}
		
		function startGame(e) {
			s = 10; //speed
			d = 0;	
			shields = 3;
			currentPoints = 0;
			
			isBoost = false;
			isPlaying = true;
			isExplode = false;
			isImmune = false;
			increaseDifficulty = true;
			titleScreen.visible = false;
			
			c.Sound.stop("Title");
			c.Sound.play("BGM", c.Sound.INTERRUPT_EARLY, 0, 0, -1, 0.8);
			
			startTime = (new Date()).getTime();
			
			ship.gotoAndPlay("rest");
		}
		
		function endGame() {
			titleScreen.timeDisplay.text = timeDiaplayString;
			titleScreen.scoreDisplay.text = currentPoints;
			titleScreen.timeDisplay.visible = true;
			titleScreen.timeLabel.visible = true;
			titleScreen.scoreDisplay.visible = true;
			titleScreen.scoreLabel.visible = true;
			titleScreen.visible = true;
			
			s = 0;
			d = 0;
			shields = 3;
			nextObstacle = -1;
			nextPickup = -1;
			ship.x = w / 2;
			ship.y = h - ship.nominalBounds.height - 50;
			
			isPlaying = false;
			isExplode = false;	
			increaseDifficulty = true;
			
			obstacles.removeAllChildren();
			pickups.removeAllChildren();
		
			c.Sound.stop("BGM");
			c.Sound.play("Title", c.Sound.INTERRUPT_EARLY, 0, 0, -1, 0.8);
			
			shieldBar.gotoAndStop(shields);
			ship.gotoAndStop("rest");
		}
		
		function buildPickups() {
			pickups = new c.Container();
			nextPickup = -1;
			game.addChild(pickups);
		}
		
		function addPickups() {
			nextPickup = random(1000 - d * 200, 3000 - d * 200);
			var shield = new lib.Shield();
			shield.x = random(0, w);
			shield.y = random(-300, 0);
			var shieldRect = shield.frameBounds[0];
			shield.setBounds(shieldRect.x, shieldRect.y, shieldRect.width, shieldRect.height);
			pickups.addChild(shield);
		}
		
		function buildObstacles() {
			obstacles = new c.Container();
			nextObstacle = -1;
			game.addChild(obstacles);
		}
		
		function addObstacle() {
			nextObstacle = random(300 - d * 200, 800 - d * 200);
			var side = random(0, 1);
			var obstacle = new lib.Obstacle();
			if(side == 1) {
				obstacle.x = w - random(-200, 300);
			}else{
				obstacle.x = 0 + random(-100, 200);
			}
			obstacle.y = (0 - h) - random(100, 400);
			obstacles.addChild(obstacle);
		}
		
		function buildShip(){
			ship = new lib.Ship();
			ship.x = w/2;
			ship.y = h - ship.nominalBounds.height - 50;
			var shipRect = ship.frameBounds[0];
			ship.setBounds(shipRect.x, shipRect.y, shipRect.width, shipRect.height);
			game.addChild(ship);
		}
		
		function buildHUD() {
			hud = new c.Container();
			
			shieldBar = new lib.ShieldBar();
			shieldBar.x = 10;
			shieldBar.y = 10;
			shieldBar.gotoAndStop(3);
			hud.addChild(shieldBar);
			
			pointsDisplay = new c.Text("0", "28px Arial", "#FFFFFF");
			pointsDisplay.width = 100;
			pointsDisplay.x = w - 20;
			pointsDisplay.y = 5;
			pointsDisplay.textAlign = "right";
			hud.addChild(pointsDisplay);
			
			stage.addChild(hud);
		}
		
		function performBackgroundMovements(a) {
			starField1.y += Math.floor(a * 0.1);
			starField2.y += Math.floor(a * 0.1);
			
			if(starField1.y >= h) {
				starField1.y = starField2.y - h;
			}
			
			if(starField2.y >= h) {
				starField2.y = starField1.y - h;
			}
			
			spaceCorridor1.y += Math.floor(a * 0.4);
			spaceCorridor2.y += Math.floor(a * 0.4);
			
			if(spaceCorridor1.y >= h) {
				spaceCorridor1.y = spaceCorridor2.y - h;
			}
				
			if(spaceCorridor2.y >= h) {
				spaceCorridor2.y = spaceCorridor1.y - h;
			}
			
			if(backGround.x < 0) {
				backGround.x = Math.floor(backGround.x + 1);
			}else if(backGround.x > 0) {
				backGround.x = Math.floor(backGround.x - 1);
			}else{
				backGround.x = 0;
			}
		}
		
		function buildBackground() {
			backGround = new c.Container();
			var staticBG = new lib.StaticBG();
			staticBG.cache(-400, -400, 800, 800);
			backGround.addChild(staticBG);
			stage.addChild(backGround);
		
			starField1 = new lib.StarField();
			starField1.x = 0;
			starField1.cache(-400, -400, 800, 800);
			backGround.addChild(starField1);
		
			starField2 = new lib.StarField();
			starField2.x = 0;
			starField2.y = -h;
			starField2.cache(-400, -400, 800, 800);
			backGround.addChild(starField2);
		
			spaceCorridor1 = new lib.SpaceCorridor();
			spaceCorridor1.x = w / 2;
			spaceCorridor1.cache(-540, -400, 1080, 800);
			backGround.addChild(spaceCorridor1);
		
			spaceCorridor2 = new lib.SpaceCorridor();
			spaceCorridor2.x = w / 2;
			spaceCorridor2.y = -h;
			spaceCorridor2.cache(-540, -400, 1080, 800);
			backGround.addChild(spaceCorridor2);
		
		}
		
		function buildTitleScreen(){
			titleScreen = new lib.TitleScreen();
			titleScreen.x = 0;
			titleScreen.y = 0;
			titleScreen.timeDisplay.visible = false;
			titleScreen.timeLabel.visible = false;
			titleScreen.scoreDisplay.visible = false;
			titleScreen.scoreLabel.visible = false;
			c.Sound.play("Title", c.Sound.INTERRUPT_EARLY, 0, 0, -1, 0.4);
			//c.Sound.play(link, хз, delay, offset, loop(-1 forever), volume, pan(<- хз))
			stage.addChild(titleScreen);
		}
		
		function convertTime(s) {
			var seconds = 0;
			var minutes = 0;
			var secondsString = s % 60 + "";
			if (secondsString.length < 2) {
				seconds = "0" + secondsString;
			} else {
				seconds = secondsString;
			}
		
			var minutesString = parseInt(s / 60) + "";
			if (minutesString.length < 2) {
				minutes = "0" + minutesString;
			} else {
				minutes = minutesString;
			}
			return minutes + ":" + seconds;
		}
		
		random = function (min, max) {
			return Math.round(Math.random() * max) + min;
		};
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(211,210,380,146);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"sounds/BGM.mp3?1504504040431", id:"BGM"},
		{src:"sounds/Booster.mp3?1504504040431", id:"Booster"},
		{src:"sounds/Charging.mp3?1504504040431", id:"Charging"},
		{src:"sounds/Damage.mp3?1504504040431", id:"Damage"},
		{src:"sounds/Death.mp3?1504504040431", id:"Death"},
		{src:"sounds/Pickup.mp3?1504504040431", id:"Pickup"},
		{src:"sounds/Title.mp3?1504504040431", id:"Title"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;