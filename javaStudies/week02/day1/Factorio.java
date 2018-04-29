import java.util.Scanner;

public class Factorio {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("gimme a number i will tell ya its factorio");
    int givenParameter = scanner.nextInt();
    System.out.println(factorio(givenParameter));
  }
  public static int factorio(int givenNumber) {
    int resoult = 1;
    while (givenNumber > 0) {
      resoult *= givenNumber;
      givenNumber--;
    }
    return resoult;
  }
}
