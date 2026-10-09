
import java.io.*;
import java.net.*;

public class Myclient1 {
    Socket s;
    DataInputStream din;
    DataOutputStream dout;

    public Myclient1() {
        try {
            s = new Socket("localhost", 10);
            System.out.println(s);

            din = new DataInputStream(s.getInputStream());
            dout = new DataOutputStream(s.getOutputStream());

            clientChat();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void clientChat() throws IOException {
        BufferedReader br = new BufferedReader(
            new InputStreamReader(System.in)
        );

        String s1;

        do {
            s1 = br.readLine();

            dout.writeUTF(s1);
            dout.flush();

            if (!s1.equals("stop")) {
                System.out.println("Server Message: " + din.readUTF());
            }
        } while (!s1.equals("stop"));

        din.close();
        dout.close();
        s.close();
        br.close();
    }

    public static void main(String ar[]) {
        new Myclient1();
    }
}