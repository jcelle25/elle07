package Act2;

public class Main {
	public static void main( String[] args) {
		Circle S = new Circle();
		
		 System.out.println("Circle area: " +S.calculateArea());
		 System.out.println("Circle perimeter: " +S.calculatePerimeter());
		 Triangle  t = new Triangle();
		 System.out.println("Triangle area: " +t.calculateArea());
		 System.out.println("Triangle perimeter: " +t.calculatePerimeter());
	}

}
