import java.util.Scanner;

public class printBigger {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("give me two integers, i will tell you wich one is bigger.");
    int num1 = scanner.nextInt();
    int num2 = scanner.nextInt();

    if(num1 > num2) {
      System.out.println(num1 + " is bigger than " + num2);
    } else {
    System.out.println(num2 + " is bigger than " + num1);
    }
  }
}
