---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a second-year Master's student at the School of Computer Science, Shanghai Jiao Tong University (SJTU). I am a member of the <a href="https://apex.sjtu.edu.cn/">APEX Lab</a>, privileged to be advised by <a href="https://apex.sjtu.edu.cn/members/yyu">Prof. Yong Yu</a> and <a href="https://wnzhang.net/">Prof. Weinan Zhang</a>. Prior to this, I obtained my Bachelor's degree in Computer Science and Technology from SJTU in 2024.

My research interests primarily focus on **(M)LLM-based Agents**, **LLM Reasoning**, and **Data Mining**. You can find my publications on <a href='https://scholar.google.com/citations?user=54ZsohAAAAAJ'>Google Scholar</a>.

<!-- My research interests primarily focus on (M)LLM-based Agent, LLM Reasoning, and Data Mining. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=54ZsohAAAAAJ'>google scholar citations <strong><span id='total_cit'>100+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=54ZsohAAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2025.10*: Our technical report about OS agent "[**ColorAgent**: Building A Robust, Personalized, and Interactive OS Agent](https://arxiv.org/abs/2510.19386)" has been released on arXiv.
- *2025.08*: Our paper "[**NL-Debugging**: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80/)" is accepted to **EMNLP 2025**! See you in Suzhou, China! 🇨🇳
- *2025.08*: Our paper "[**LLM4CD**: Leveraging Large Language Models for Open-World Knowledge Augmented Cognitive Diagnosis](https://dl.acm.org/doi/abs/10.1145/3746252.3761321)" is accepted to **CIKM 2025**! See you in Seoul, South Korea! 🇰🇷

# 📝 Publications

## (M)LLM Agents

[**Plan-MCTS: Plan Exploration for Action Exploitation in Web Navigation**](https://arxiv.org/abs/2602.14083)  
**Weiming Zhang**, Jihong Wang, Jiamu Zhou, Qingyao Li, Xinbei Ma, Congmin Zheng, Xingyu Lou, Weiwen Liu, Zhuosheng Zhang, Jun Wang, Yong Yu, Weinan Zhang  
*Preprint on arXiv, 2026*

[**ColorBrowserAgent: Complex Long-Horizon Browser Agent with Adaptive Knowledge Evolution**](https://arxiv.org/abs/2601.07262)  
Jihong Wang, Jiamu Zhou, **Weiming Zhang**, Weiwen Liu, Zhuosheng Zhang, Xingyu Lou, Weinan Zhang, Huarong Deng, Jun Wang  
*Preprint on arXiv, 2026*

[**ColorAgent: Building A Robust, Personalized, and Interactive OS Agent**](https://arxiv.org/abs/2510.19386)  
Ning Li*, Qiqiang Lin*, Zheng Wu, Xiaoyun Mo, **Weiming Zhang**, Yin Zhao, Xiangmou Qu, Jiamu Zhou, Jun Wang, Congmin Zheng, Yuanyi Song, Hongjiang Chen, Heyuan Huang, Jihong Wang, Jiaxin Yin, Jingwei Yu, Junwei Liao, Qiuying Peng, Xingyu Lou, Weiwen Liu, Zhuosheng Zhang, Weinan Zhang  
*Preprint on arXiv, 2025*

## LLM for Code

[**NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging**](https://aclanthology.org/2025.emnlp-main.80/)  
**Weiming Zhang\***, Qingyao Li*, Xinyi Dai, Jizheng Chen, Kounianhua Du, Weiwen Liu, Yasheng Wang, Ruiming Tang, Yong Yu, Weinan Zhang  
*The 2025 Conference on Empirical Methods in Natural Language Processing (**EMNLP 2025**)*

[**LogitsCoder: Towards Efficient Chain-of-Thought Path Search via Logits Preference Decoding for Code Generation**](https://arxiv.org/abs/2602.14054)  
Jizheng Chen*, **Weiming Zhang\***, Xinyi Dai, Weiwen Liu, Kounianhua Du, Yasheng Wang, Ruiming Tang, Yong Yu, Weinan Zhang  
*Preprint on arXiv, 2026*

[**DebateCoder: Towards Collective Intelligence of LLMs via Test Case Driven LLM Debate for Code Generation**](https://aclanthology.org/2025.acl-long.589/)  
Jizheng Chen, Kounianhua Du, Xinyi Dai, **Weiming Zhang**, Xihuai Wang, Yasheng Wang, Ruiming Tang, Weinan Zhang, Yong Yu  
*The 63rd Annual Meeting of the Association for Computational Linguistics (**ACL 2025**)*

[**Codeapex: A bilingual programming evaluation benchmark for large language models**](https://arxiv.org/abs/2309.01940)  
Lingyue Fu, Huacan Chai, Shuang Luo, Kounianhua Du, **Weiming Zhang**, Longteng Fan, Jiayi Lei, Renting Rui, Jianghao Lin, Yuchen Fang, Yifan Liu, Jingkuan Wang, Siyuan Qi, Kangning Zhang, Weinan Zhang, Yong Yu  
*Preprint on arXiv, 2024*

## AI Education

[**LLM4CD: Leveraging Large Language Models for Open-World Knowledge Augmented Cognitive Diagnosis**](https://dl.acm.org/doi/abs/10.1145/3746252.3761321)  
**Weiming Zhang**, Lingyue Fu, Qingyao Li, Kounianhua Du, Jianghao Lin, Jingwei Yu, Wei Xia, Weinan Zhang, Ruiming Tang, Yong Yu  
*The 34th ACM International Conference on Information and Knowledge Management (**CIKM 2025**)*

[**Adapting large language models for education: Foundational capabilities, potentials, and challenges**](https://arxiv.org/abs/2401.08664)  
Qingyao Li, Lingyue Fu, **Weiming Zhang**, Xianyu Chen, Jingwei Yu, Wei Xia, Weinan Zhang, Ruiming Tang, Yong Yu  
*Preprint on arXiv, 2024*

<br>
<small>(* denotes equal contribution)</small>

# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.