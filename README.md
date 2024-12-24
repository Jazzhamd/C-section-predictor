**INSTRUCTIONS FOR RUNNING THE APPLICATION**

Setting up Flask server and Python backend:

1. Navigate to flask-server directory.
2. Run c_section.py :
  	i) Install necessary modules:
	   Package                      Version
		absl-py                      2.1.0
		astunparse                   1.6.3
		blinker                      1.8.2
		certifi                      2024.8.30
		charset-normalizer           3.4.0
		click                        8.1.7
		colorama                     0.4.6
		et_xmlfile                   2.0.0
		Flask                        3.0.3
		Flask-Cors                   5.0.0
		flatbuffers                  24.3.25
		gast                         0.6.0
		google-pasta                 0.2.0
		grpcio                       1.67.1
		h5py                         3.12.1
		idna                         3.10
		imbalanced-learn             0.12.4
		itsdangerous                 2.2.0
		Jinja2                       3.1.4
		joblib                       1.4.2
		keras                        3.6.0
		libclang                     18.1.1
		Markdown                     3.7
		markdown-it-py               3.0.0
		MarkupSafe                   3.0.2
		mdurl                        0.1.2
		ml-dtypes                    0.4.1
		namex                        0.0.8
		numpy                        2.0.2
		openpyxl                     3.1.5
		opt_einsum                   3.4.0
		optree                       0.13.0
		packaging                    24.1
		pandas                       2.2.3
		pip                          24.0
		protobuf                     5.28.3
		Pygments                     2.18.0
		python-dateutil              2.9.0.post0
		pytz                         2024.2
		requests                     2.32.3
		rich                         13.9.3
		scikeras                     0.13.0
		scikit-learn                 1.5.2
		scipy                        1.14.1
		setuptools                   65.5.0
		six                          1.16.0
		tensorboard                  2.18.0
		tensorboard-data-server      0.7.2
		tensorflow                   2.18.0
		tensorflow_intel             2.18.0
		tensorflow-io-gcs-filesystem 0.31.0
		termcolor                    2.5.0
		threadpoolctl                3.5.0
		typing_extensions            4.12.2
		tzdata                       2024.2
		urllib3                      2.2.3
		Werkzeug                     3.1.0
		wheel                        0.44.0
		wrapt                        1.16.0
  	ii) Command : python c_cection.py
  	iii) Results for all models will be displayed and .pkl files to be used
        in server will be created.
3. Run server.py :
	i) Install necessary modules:
	   ├── @emotion/react@11.13.3
           ├── @emotion/styled@11.13.0
           ├── @mui/icons-material@6.1.5
           ├── @mui/material@6.1.5
           ├── @testing-library/jest-dom@5.17.0
           ├── @testing-library/react@13.4.0
           ├── @testing-library/user-event@13.5.0
           ├── bootstrap@5.3.3
           ├── chart.js@4.4.6
           ├── react-bootstrap@2.10.5
           ├── react-chartjs-2@5.2.0
           ├── react-dom@18.3.1
           ├── react-icons@5.3.0
           ├── react-scripts@5.0.1
           ├── react@18.3.1
           └── web-vitals@2.1.4
            Run "npm list" to see your existing modules
	ii) Command : python flask-server.py
	iii) Development server will start running.

Setting up front-end:

1. Open Terminal.
2. Change the working directory to Client.
3. Run the commands : 
	i) npm install
	ii) npm start
   Application will start in localHost.
