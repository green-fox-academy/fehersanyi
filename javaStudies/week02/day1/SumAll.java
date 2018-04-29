public class SumAll {
  public static void main(String[] args) {
    int[] ai = {3, 4, 5, 6, 7};
    int res = 0;
    for(int i = 0; i < ai.length; i++) {
      res += ai[i];
    }
    System.out.println(res);
  }
}
