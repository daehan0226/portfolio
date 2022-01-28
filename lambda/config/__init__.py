config = {
    "blog_url": "https://foxlee.tistory.com",
    "firestore_collection": "tistory_posts",
    "credentials_path": "./config/credentials.json",
    "sleep_time": 0.4,
    "elements": {
        "paging_anchors": ".area_paging .paging_num a.link_num",
        "post": {
            "list": ".inner_index .category_list ul li",
            "anchor": "a.link_title",
            "title": ".link_title .title_post",
            "desc": ".link_article .txt_post",
            "category": ".link_category .category",
            "date": ".info_post .date"
        }
    }
}