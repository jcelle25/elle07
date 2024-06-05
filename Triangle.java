package Act2;

public class Triangle extends Shape {
	public double base = 6;
	public double height = 8;
	public double side = 8;
	
	public double calculateArea() {
		return (base + height + side/2);
		
	}
	
	public double calculatePerimeter() {
		return (base + height + side);
	}
	
}
