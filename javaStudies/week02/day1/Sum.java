import java.util.Scanner;
public class Sum {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("gimme a numbah");
    int givenParameter = scanner.nextInt();

    System.out.println("sum until da end " + sum(givenParameter));
  }
  public static int sum(int param) {
    int resoult = 0;
    for(int i = 0; i <= param; i++) {
      resoult += i;
    }
    return resoult;
  }
}
