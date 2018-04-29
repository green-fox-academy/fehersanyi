import java.util.Scanner;

public class AnimalsAndLegs {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("give me the number of chickens!");

    int chickens = scanner.nextInt();

    System.out.println("give me the number of pigs!");
    
    int pigs = scanner.nextInt();

    System.out.println("there are " + (chickens * 2 + pigs * 4) + " legs on the farm");
  }
}
