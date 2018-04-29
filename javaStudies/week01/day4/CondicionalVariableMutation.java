public class CondicionalVariableMutation {
  public static void main(String[] args) {
    int a = 24;
    int out = 0;
    if (a % 2 == 0) {
      out++;
      System.out.println(out);
    }else {
      System.out.println(out);
    }
    int b = 13;
    String out2 = "";
    if (b > 10 && b < 20) {
      System.out.println("sweet");
    }
    else if(b < 10) {
      System.out.println("less");
    } else {
      System.out.println("more");
    }

    int c = 123;
    int credits = 100;
    boolean isBonus = false;

    if (credits >= 50 && isBonus == false) {
      c -= 2;
    }
    else if (credits < 50 && isBonus == false) {
      c -= 1;
    } 

    System.out.println(c);

    int d = 8;
    int time = 120;
    String out3 = "";

    if (d % 4 == 0 && time <= 200) {
      out3 = "check";
    }
    else if (time > 200) {
      out3 = "time out";
    } else {
      out3 = "run forest run";
    }

    System.out.println(out3);
  }
}
