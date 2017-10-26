class Court {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw() {
    const courtWidth = Court.scale * Court.DIM_X;
    const courtHeight = Court.scale * Court.DIM_Y;
    
    const centerX = courtWidth / 2;

    // Court outline (baseline and sidelines)
    this.ctx.strokeStyle="black";
    this.ctx.strokeRect(Court.START_X, Court.START_Y, courtWidth, courtHeight);
    
    // Painted area
    const paintWidth = 16 * Court.scale;
    const paintHeight = 18.916666666 * Court.scale;
    this.ctx.strokeRect(Court.START_X + centerX - paintWidth/2,
                        Court.START_Y,
                        paintWidth,
                        paintHeight);
    const innerPaintWidth = 12 * Court.scale;
    this.ctx.strokeRect(Court.START_X + centerX - innerPaintWidth / 2,
      Court.START_Y,
      innerPaintWidth,
      paintHeight);

    // Key circle
    const keyCircleRadius = 6 * Court.scale;
    this.ctx.beginPath();
    this.ctx.arc(Court.START_X + centerX,
      Court.START_Y + paintHeight,
      keyCircleRadius,
      0, Math.PI, false);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.setLineDash([15, 15]);
    this.ctx.arc(Court.START_X + centerX, 
                 Court.START_Y + paintHeight, 
                 keyCircleRadius,
                 0, Math.PI, true);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    // this.ctx.beginPath();
    // this.ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // this.ctx.stroke();

    // backboard and rim
    const backboardWidth = Court.backboardWidth;
    const rimDiameter = Court.rimDiameter;
    const backboardToRim = Court.backboardToRim;
    const baselineToBackboard = Court.baselineToBackboard;
    this.ctx.beginPath();
    this.ctx.moveTo(Court.START_X + centerX - backboardWidth/2,
                    Court.START_Y + baselineToBackboard);
    this.ctx.lineTo(Court.START_X + centerX + backboardWidth/2,
                    Court.START_Y + baselineToBackboard);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(Court.START_X + centerX,
      Court.START_Y + baselineToBackboard);
    this.ctx.lineTo(Court.START_X + centerX,
      Court.START_Y + baselineToBackboard + backboardToRim);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(Court.START_X + centerX, 
                 Court.START_Y+baselineToBackboard + backboardToRim + rimDiameter/2,
                 rimDiameter / 2,
                 0, 180, false);
    this.ctx.stroke();

    // 3 pt line
    const threePointCornerRadius = 22 * Court.scale;
    const threePointStraightLength = 14 * Court.scale;
    const threePointTopRadius = 23.75 * Court.scale;
    this.ctx.beginPath();
    this.ctx.moveTo(Court.START_X + centerX - threePointCornerRadius, 
                    Court.START_Y);
    this.ctx.lineTo(Court.START_X + centerX - threePointCornerRadius,
                    Court.START_Y + threePointStraightLength);
    this.ctx.arc(Court.START_X + centerX,
                 Court.START_Y + baselineToBackboard + backboardToRim + rimDiameter / 2,
                 threePointTopRadius,
                 Math.PI - Math.atan((threePointStraightLength - (baselineToBackboard + backboardToRim + rimDiameter / 2)) / threePointCornerRadius),
                 2*Math.PI + Math.atan((threePointStraightLength - (baselineToBackboard + backboardToRim + rimDiameter / 2)) / threePointCornerRadius),
                 true);
    this.ctx.lineTo(Court.START_X + centerX + threePointCornerRadius,
      Court.START_Y);
    this.ctx.stroke();
  }
}

Court.START_X = 20;
Court.START_Y = 20;
Court.scale = 15; // scale dimensions in feet to show on screen
// X is baseline dim, Y is sideline dim (to half court) - in ft
Court.DIM_X = 50;
Court.DIM_Y = 40;
Court.backboardWidth = 6 * Court.scale;
Court.rimDiameter = 1.5 * Court.scale;
Court.backboardToRim = 0.2 * Court.scale;
Court.baselineToBackboard = 3.83333 * Court.scale;

module.exports = Court;