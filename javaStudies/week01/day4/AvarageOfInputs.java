import java.util.Scanner;

public class AvarageOfInputs {
  public static void main(String[] args) {
    System.out.println("give me five integers in a row");
    Scanner scanner = new Scanner(System.in);
    
    int num1 = scanner.nextInt();
    int num2 = scanner.nextInt();
    int num3 = scanner.nextInt();
    int num4 = scanner.nextInt();
    int num5 = scanner.nextInt();

    System.out.println("Sum: " + (num1 + num2 + num3 + num4 + num5) + ", Avarage: " + ((num1 + num2 + num3 + num4 + num5) / 5));
  }
}
