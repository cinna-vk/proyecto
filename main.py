from flask import Flask, render_template
class Pag_Web_Local:
    def __init__(self):
        self.app = Flask(__name__, static_folder='statics') 
        self.app.add_url_rule('/', 'home', self.home)

    def home(self):
        return render_template('main.html')
    
    def run(self):
        self.app.run(host='0.0.0.0', port=8000, debug=True)

if __name__ == '__main__':
    app_instance = Pag_Web_Local()
    app_instance.run()
