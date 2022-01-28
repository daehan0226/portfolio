import urllib.request 

from bs4 import BeautifulSoup 

class Parser:

    def __init__(self, url):
        self.doc = BeautifulSoup(urllib.request.urlopen(url).read(), "html.parser")
    
    def get_text_from_parsed_doc(self, selector):
        return self.doc.select_one(selector).text.strip()

    def get_item_list(self, selector):
        return self.doc.select(selector)

    @staticmethod
    def get_text_from_element(element, selector):
        return element.select_one(selector).text.strip()
    
    @staticmethod
    def get_href_from_element(element, selector):
        return element.select_one(selector)["href"]