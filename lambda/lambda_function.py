import json
import random
import time

from config import config
from src.firestore_client import FirestoreClient
from src.parser import Parser
from src.post import Post


def handler(event, context):
    elements = config["elements"]
    post_selector = config["elements"]["post"]

    # check max page number
    blog_parser = Parser(config["blog_url"])
    max_page_number = 1
    blog_posts_pages = blog_parser.get_item_list(elements["paging_anchors"])
    for page in blog_posts_pages:
        if pagePrama := page.get('href'):
            max_page_number = pagePrama.replace("?page=", "")

    # store post elements 
    post_elements = []
    for page in range(1, int(max_page_number)+1):
        time.sleep(random.uniform(config["sleep_time"],config["sleep_time"]+0.5))
        blog_page_parser = Parser(f"{config['blog_url']}/?page={page}")
        post_elements.extend(blog_page_parser.get_item_list(post_selector["list"]))
    
    # parse and upsert
    for post_element in post_elements:
        post = Post(Post.parse_post_date(post_element))
        FirestoreClient.upsert(config["firestore_collection"], post.id, post.serialize)

    return {
          'statusCode': 200,
          'body': json.dumps({"count": len(post_elements)})
      }
