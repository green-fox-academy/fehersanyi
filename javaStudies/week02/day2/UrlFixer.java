public class UrlFixer {
  public static void main(String[] args) {
    String url = "https//www.reddit.com/r/nevertellthebots";
    url = url.replace("ps", "ps:");
    url = url.replace("bots", "odds");
    System.out.println(url);
  }
}
