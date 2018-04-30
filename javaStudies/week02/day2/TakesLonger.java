public class TakesLonger {
  public static void main(String[] args) {
    String quote = "Hofstande's Law: It You expect, even when you take into account Hofstader's law.";
    quote = quote.replace("It ", "It always takes longer than ");
    System.out.println(quote);
  }
}
