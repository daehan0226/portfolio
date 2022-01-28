from datetime import datetime, timedelta
from src.parser import Parser
from config import config

post_selector = config["elements"]["post"]

class Post:
    base_url= config["blog_url"]

    def __init__(self, post):
        self._id = post["_id"]
        self.title= post["title"] 
        self.desc = post["desc"]
        self.link = f'{Post.base_url}/{self._id}'
        self.date = self._convert_to_ust_datetime(post["date"])
        self.category = post["category"]

    @property
    def id(self):
        return self._id

    def _convert_to_ust_datetime(self, date):
        return datetime.strptime(date, '%Y. %m. %d. %H:%M') - timedelta(hours=9)
 
    @property
    def serialize(self):
        return {
            "title": self.title,
            "desc": self.desc,
            "date": self.date,
            "link": self.link,
            "category": self.category
        }
    
    @staticmethod
    def parse_post_date(element):
        return {
            "_id": Parser.get_href_from_element(element, post_selector["anchor"]).replace("/",""),
            "title": Parser.get_text_from_element(element, post_selector["title"]),
            "desc": Parser.get_text_from_element(element, post_selector["desc"]),
            "date": Parser.get_text_from_element(element, post_selector["date"]),
            "category": Parser.get_text_from_element(element, post_selector["category"]),
        }