import java.io.*;
import java.net.*;

public class Myserver {

    ServerSocket ss;
    Socket s;
    DataInputStream dis;
    DataOutputStream dos;   // Changed from DataInputStream

    public Myserver() {
        try {
            System.out.println("Server Started");

            ss = new ServerSocket(10);   // Port number = 10
            s = ss.accept();

            System.out.println("CLIENT CONNECTED");

            dis = new DataInputStream(s.getInputStream());
            dos = new DataOutputStream(s.getOutputStream());

            serverChat();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String args[]) {
        new Myserver();
    }

    public void serverChat() throws IOException {

        String str, s1;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        do {
            str = dis.readUTF();
            System.out.println("Client Message: " + str);

            s1 = br.readLine();

            dos.writeUTF(s1);
            dos.flush();

        } while (!s1.equals("stop"));
    }
}