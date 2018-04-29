import java.util.Scanner;

public class mileToKilometer {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("give a number in kilometers, i can translate it to miles.");
    int kilometers = scanner.nextInt();
    double toMiles = 0.62137;
    System.out.println(kilometers + " kilometers are " + (kilometers * toMiles) + " miles in total.");  
 }
}
