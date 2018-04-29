import java.util.Scanner;

public class ParametricAvarage {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("give a number we will work with it");
    int numberOfRounds = scanner.nextInt();

    if (numberOfRounds == 0) {
      System.out.println("oh plese");
    }
    else if (numberOfRounds == 1) {
      int num1 = scanner.nextInt();
      System.out.println("you dont get it i see");
    }
    else if (numberOfRounds == 2) {
      int num1 = scanner.nextInt();
      int num2 = scanner.nextInt();
      System.out.println("sum: " + (num1 + num2) + " avarage: " + (num1 + num2) / 2);
    }
  }
}
