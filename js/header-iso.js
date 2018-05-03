var header_iso = new Isomer(document.getElementById("header-iso"));

var width = 700;
var height = 600;

var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;

  for (x = 0; x < width; x++) {
    header_iso.add(new Path([
      new Point(x, 0, 0),
      new Point(x, height - 1, 0),
      new Point(x, 0, 0)
    ]), new Color(230, 230, 230));
  }
  for (y = 0; y < height; y++) {
    header_iso.add(new Path([
      new Point(0, y, 0),
      new Point(width - 1, y, 0),
      new Point(0, y, 0)
    ]), new Color(140, 140, 140));
  }

var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);


header_iso.add(Shape.Prism(Point.ORIGIN, 0.1, 0.5, 2.5)
.rotateZ(Point(0, 0, 0), -1.5 * Math.PI / 2));

header_iso.add(Shape.Prism(Point.ORIGIN, 0.1, 2, 0.5)
.rotateZ(Point(0, 0, 0), -1.5 * Math.PI / 2));

header_iso.add(Shape.Prism(Point(0, 2, 0), 0.1, 0.5, 1)
.rotateZ(Point(0, 0, 0), -1.5 *Math.PI / 2));

header_iso.add(Shape.Prism(Point(0, 1, 1), 0.1, 1.5, 0.5)
.rotateZ(Point(0, 0, 0), -1.5 * Math.PI / 2));

header_iso.add(Shape.Prism(Point(0, 0, 2.5), 0.1, 2.5, 0.5)
.rotateZ(Point(0, 0, 0), -1.5 * Math.PI / 2));