package synapse.API;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

@SpringBootApplication
public class ApiApplication {


	static ClassLoader classLoader = ApiApplication.class.getClassLoader();

	static File file = new File(Objects.requireNonNull(classLoader.getResource("ServiceKey.json")).getFile());
	static FileInputStream serviceAccount;

	static {
		try {
			serviceAccount = new FileInputStream(file.getAbsolutePath());
		} catch (FileNotFoundException e) {
			throw new RuntimeException(e);
		}
	}

	public static void onCreate() throws IOException {
		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.setDatabaseUrl("https://synapse-4e711-default-rtdb.europe-west1.firebasedatabase.app")
				.build();
		FirebaseApp.initializeApp(options);
	}

	public ApiApplication() throws IOException {
	}

	public static void main(String[] args) throws IOException{
		onCreate();
		SpringApplication.run(ApiApplication.class, args);
	}

}
