import java.util.Scanner;

public class Diagonal {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("how many lines should i draw?");
    int lines = scanner.nextInt();
    String myChar = "%";
    for(int i = 1; i  < lines; i++) {
      if(i == 1) {
        for(int j = 0; j < lines; j++) {
          myChar += "%";
        }
      System.out.println(myChar);
      }
      if(i == lines) {
        for(int k = 0; k < lines; k++) {
          myChar += "%";
        }
      System.out.println(myChar);
      

      }

    }
  }
}
