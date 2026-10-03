#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
نسخه وب - تولید محتوای شغل معماری با هوش مصنوعی
Architecture AI Content Generator - Web Version (Streamlit)
"""

import streamlit as st
import random
from datetime import datetime, timedelta
from pathlib import Path
import base64

# ==================== تنظیمات صفحه ====================
st.set_page_config(
    page_title="تولید محتوای معماری با AI",
    page_icon="🏗️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ==================== داده‌های پایه ====================
STYLES = [
    "مدرن مینیمال", "کلاسیک ایرانی", "معماری سنتی ایرانی", "معماری اسلامی",
    "معماری معاصر", "معماری پایدار و سبز", "معماری صنعتی", "معماری اسکاندیناوی",
    "معماری مدیترانه‌ای", "معماری بیوفیلیک", "معماری پارامتریک", "معماری ارگانیک",
    "نئوکلاسیک", "معماری ژاپنی", "های‌تک"
]

PROJECT_TYPES = [
    "ویلای لوکس", "آپارتمان مسکونی", "ساختمان اداری", "فضای تجاری",
    "کافه و رستوران", "هتل و اقامتگاه", "مرکز فرهنگی", "مسجد و مکان مذهبی",
    "ویلای کوهستانی", "خانه باغ", "پروژه بازسازی", "طراحی داخلی",
    "پنت‌هاوس", "مجتمع مسکونی", "فضای کار اشتراکی"
]

# ==================== توابع تولید محتوا ====================

def generate_instagram_caption(style, project):
    templates = [
        f"""🏠 {project} با سبک {style}

وقتی طراحی فقط زیبایی نیست، بلکه تجربه‌ی زندگی است...

در این پروژه سعی کردیم با ترکیب نور، متریال طبیعی و فرم‌های {style}، فضایی خلق کنیم که آرامش رو به ساکنین هدیه بده.

کدوم جزئیات این طراحی بیشتر به دلتون نشست؟ نظراتتون رو برامون بنویسید 👇

#معماری #طراحی_معماری #معماری_ایرانی""",
        
        f"""✨ معرفی پروژه: {project}

سبک: {style}
هدف: خلق فضایی که هم کاربردی باشه و هم هویت داشته باشه.

از انتخاب متریال تا جزئیات نورپردازی، همه چیز با دقت طراحی شده تا حس تعلق و آرامش رو منتقل کنه.

ذخیره کن و برای پروژه‌های بعدیت الهام بگیر 📌""",
        
        f"""چیزی که یک {project} رو خاص می‌کنه، فقط ظاهرش نیست.

در سبک {style} ما روی این موارد تمرکز کردیم:
• جریان نور طبیعی
• ارتباط داخل و خارج
• متریال‌های بومی و پایدار
• جزئیات انسانی

نظر شما چیه؟ کدوم اصل طراحی براتون مهم‌تره؟"""
    ]
    return random.choice(templates)


def generate_linkedin_post(style, project):
    templates = [
        f"""در دنیای معماری امروز، طراحی یک {project} فقط به معنای خلق فضا نیست؛ بلکه خلق تجربه است.

در پروژه‌ای که اخیراً با رویکرد {style} کار کردیم، تمرکز اصلی ما روی سه اصل بود:

۱. پایداری و استفاده هوشمند از منابع
۲. توجه به فرهنگ و هویت محلی
۳. ایجاد ارتباط عمیق بین کاربر و فضا

معماری خوب، فضایی می‌سازد که مردم نه تنها در آن زندگی می‌کنند، بلکه به آن تعلق پیدا می‌کنند.

شما در پروژه‌هایتان کدام اصل را در اولویت قرار می‌دهید؟""",
        
        f"""چرا سبک {style} در طراحی {project} همچنان محبوب است؟

چون این سبک:
• تعادل بین زیبایی و عملکرد برقرار می‌کند
• به نیاز واقعی کاربر احترام می‌گذارد
• با گذر زمان کهنه نمی‌شود

معماری آینده، معماری انسان‌محور است."""
    ]
    return random.choice(templates)


def generate_project_description(style, project):
    return f"""**عنوان پروژه:** {project}  
**سبک طراحی:** {style}

**توضیحات:**  
این پروژه با رویکرد {style} طراحی شده است. هدف اصلی، ایجاد فضایی بود که ضمن پاسخگویی به نیازهای عملکردی، حس تعلق و آرامش را برای کاربران فراهم کند.

**مفاهیم کلیدی طراحی:**
- استفاده از نور طبیعی به عنوان عنصر اصلی فضا
- انتخاب متریال‌های پایدار و بومی
- ایجاد سلسله‌مراتب فضایی شفاف
- توجه به مقیاس انسانی و جزئیات لمسی

**نتیجه:** فضایی که نه تنها دیده می‌شود، بلکه تجربه می‌شود."""


def generate_content_ideas(style, project):
    ideas = [
        f"۱. پشت‌صحنه طراحی {project} با سبک {style} (از اسکچ تا رندر)",
        f"۲. ۵ اصل مهم در طراحی {style} که هر معماری باید بداند",
        f"۳. مقایسه قبل و بعد بازسازی یک {project}",
        f"۴. اشتباهات رایج در طراحی داخلی {project} و راه‌حل‌ها",
        f"۵. چگونه متریال‌های طبیعی حس فضا را در سبک {style} تغییر می‌دهند",
        f"۶. تور مجازی از یک {project} تکمیل‌شده",
        f"۷. داستان یک جزئیات کوچک که کل پروژه را متحول کرد",
        f"۸. نکات نورپردازی در فضاهای {style}"
    ]
    return "\n\n".join(random.sample(ideas, 6))


def generate_ai_prompt(style, project, content_type):
    prompts = {
        "کپشن اینستاگرام": f"""یک کپشن اینستاگرام حرفه‌ای و جذاب به زبان فارسی برای یک پروژه معماری بنویس.
نوع پروژه: {project}
سبک: {style}
لحن: الهام‌بخش، حرفه‌ای و کمی احساسی
طول: حدود ۱۲۰ تا ۱۸۰ کلمه
در پایان ۳ سوال تعاملی از مخاطب بپرس و هشتگ‌های مرتبط پیشنهاد بده.""",

        "پست لینکدین": f"""یک پست لینکدین تخصصی در حوزه معماری بنویس.
موضوع: طراحی یک {project} با رویکرد {style}
لحن: حرفه‌ای، تحلیلی و ارزشمند
ساختار: مقدمه قوی + ۳ نکته کلیدی + نتیجه‌گیری + سوال برای تعامل""",

        "توضیح پروژه": f"""یک توضیح حرفه‌ای و کامل برای بخش پورتفولیو یک معمار بنویس.
پروژه: {project}
سبک: {style}
شامل: مفهوم طراحی، چالش‌ها، راه‌حل‌ها، متریال‌ها و نتیجه نهایی.
لحن رسمی و تخصصی.""",

        "عمومی": f"""محتوای باکیفیت و تخصصی در حوزه معماری تولید کن.
موضوع: {project} با سبک {style}
زبان: فارسی
لحن: حرفه‌ای و جذاب"""
    }
    return prompts.get(content_type, prompts["عمومی"])


def generate_hashtags():
    base = [
        "#معماری", "#معماری_ایرانی", "#طراحی_معماری", "#معمار", "#معماری_مدرن",
        "#طراحی_داخلی", "#ویلا", "#معماری_پایدار", "#معماری_معاصر", "#رندر_معماری",
        "#اسکچ_معماری", "#معماری_سبز", "#طراحی_شهری", "#معماری_کلاسیک",
        "#Architecture", "#ArchitecturalDesign", "#ModernArchitecture", "#InteriorDesign"
    ]
    return "  ".join(random.sample(base, 14))


def generate_ad_text(style, project):
    return f"""آیا به دنبال طراحی یک **{project}** منحصربه‌فرد هستید؟

ما با تخصص در سبک **{style}**، پروژه‌هایی خلق می‌کنیم که:
- ✓ هویت و شخصیت دارند
- ✓ با نیازهای واقعی شما هماهنگ‌اند
- ✓ ارزش افزوده‌ی بلندمدت ایجاد می‌کنند

از مشاوره اولیه تا اجرای نهایی، همراه شما هستیم.

برای دریافت مشاوره رایگان و مشاهده نمونه‌کارها، همین حالا پیام دهید."""


def generate_story(style, project):
    return f"""**داستان یک پروژه: {project}**

همه‌چیز از یک درخواست ساده شروع شد: «می‌خواهم فضایی داشته باشم که وقتی واردش می‌شوم، نفس بکشم.»

ما سبک {style} را انتخاب کردیم، نه چون مد روز بود، بلکه چون با روحیه کارفرما همخوانی داشت.

چالش اصلی، ایجاد تعادل بین زیبایی بصری و عملکرد روزمره بود. بارها اسکچ زدیم، مدل ساختیم و با کارفرما گفتگو کردیم.

نتیجه؟ فضایی که حالا نه تنها خانه است، بلکه بخشی از هویت ساکنین شده.

معماری واقعی، وقتی اتفاق می‌افتد که فضا، داستان زندگی آدم‌ها را تعریف کند."""


def generate_image_prompt(style, project, view_type):
    view_descriptions = {
        "exterior": "نمای خارجی، زاویه سه‌ربعی، نور طلایی غروب آفتاب، آسمان صاف",
        "interior": "نمای داخلی، فضای نشیمن، نور طبیعی از پنجره‌های بزرگ، مبلمان مدرن",
        "detail": "جزئیات معماری، بافت متریال، کلوزآپ دستگیره یا اتصال سازه",
        "aerial": "نمای هوایی، سایت پلان، محوطه‌سازی و ارتباط با طبیعت اطراف",
        "night": "نمای شب، نورپردازی گرم و دلنشین، بازتاب نور در شیشه‌ها",
        "moodboard": "مودبورد معماری شامل پالت رنگی، متریال‌ها، الهام‌ها و اسکچ‌ها"
    }
    
    view_desc = view_descriptions.get(view_type, view_descriptions["exterior"])
    
    english_prompt = f"""Professional architectural photography of a {project} in {style} style, {view_desc}, high-end architectural visualization, ultra realistic, 8k resolution, cinematic lighting, detailed materials, perfect composition, shot on medium format camera, architectural digest style, masterpiece, best quality, sharp focus --ar 16:9 --v 6"""

    return f"""**پروژه:** {project}  
**سبک:** {style}  
**نوع نما:** {view_type}

---

**پرامپت انگلیسی (آماده کپی):**

```
{english_prompt}
```

**نکات استفاده:**
- در Midjourney، Flux، Grok Imagine یا Leonardo مستقیم کپی کنید
- برای نتایج بهتر کلمات کلیدی را حفظ کنید
- می‌توانید سبک و جزئیات بیشتری اضافه کنید"""


def generate_monthly_calendar(style, project, month_name):
    post_types = [
        ("کپشن + تصویر پروژه", "نمایش کار"),
        ("محتوای آموزشی", "ارزش‌آفرینی"),
        ("پشت‌صحنه طراحی", "ارتباط انسانی"),
        ("قبل و بعد", "اثبات تخصص"),
        ("نکته روز معماری", "آموزش کوتاه"),
        ("داستان پروژه", "Storytelling"),
        ("پرسش و پاسخ", "تعامل"),
        ("معرفی متریال", "تخصصی"),
        ("الهام از طبیعت/تاریخ", "الهام‌بخش"),
        ("فراخوان به اقدام", "جذب مشتری")
    ]
    
    rows = []
    start_date = datetime.now().replace(day=1)
    
    for day in range(1, 31):
        post_type, goal = random.choice(post_types)
        topic_ideas = [
            f"جزئیات {style} در {project}",
            f"نورپردازی در فضای {project}",
            f"انتخاب متریال برای {style}",
            f"چالش‌های طراحی {project}",
            f"ایده‌های خلاقانه {style}",
            f"تجربه کارفرما از {project}",
            f"پالت رنگی پیشنهادی {style}",
            f"ارتباط فضا با طبیعت در {project}"
        ]
        topic = random.choice(topic_ideas)
        date_str = (start_date + timedelta(days=day-1)).strftime("%Y-%m-%d")
        rows.append({
            "روز": day,
            "تاریخ": date_str,
            "نوع محتوا": post_type,
            "موضوع پیشنهادی": topic,
            "هدف": goal
        })
    
    return rows


# ==================== توابع کمکی ====================

def get_download_link(text, filename):
    b64 = base64.b64encode(text.encode()).decode()
    return f'<a href="data:file/txt;base64,{b64}" download="{filename}">📥 دانلود فایل</a>'


# ==================== رابط کاربری ====================

st.markdown("""
<style>
    .main-header {
        font-size: 2.2rem;
        font-weight: 700;
        color: #1E3A5F;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    .sub-header {
        text-align: center;
        color: #666;
        margin-bottom: 2rem;
    }
    .stButton>button {
        width: 100%;
    }
    div[data-testid="stSidebar"] {
        background-color: #f8f9fa;
    }
</style>
""", unsafe_allow_html=True)

st.markdown('<p class="main-header">🏗️ تولید محتوای شغل معماری با هوش مصنوعی</p>', unsafe_allow_html=True)
st.markdown('<p class="sub-header">نسخه وب • کامل و حرفه‌ای</p>', unsafe_allow_html=True)

# ==================== سایدبار ====================
with st.sidebar:
    st.header("⚙️ تنظیمات")
    
    style = st.selectbox("سبک معماری", STYLES, index=0)
    project = st.selectbox("نوع پروژه", PROJECT_TYPES, index=0)
    
    st.divider()
    st.markdown("### 📌 راهنما")
    st.info("""
    ۱. سبک و نوع پروژه را انتخاب کنید  
    ۲. از تب‌ها محتوای مورد نظر را تولید کنید  
    ۳. محتوا را کپی یا دانلود کنید  
    ۴. پرامپت‌ها را در هوش مصنوعی استفاده کنید
    """)
    
    st.divider()
    st.caption("ساخته شده برای معماران خلاق ✨")

# ==================== تب‌ها ====================
tab1, tab2, tab3, tab4, tab5, tab6 = st.tabs([
    "📝 تولید محتوا",
    "🖼️ پرامپت تصویر",
    "📅 تقویم ماهانه",
    "🤖 پرامپت AI",
    "🏷️ هشتگ و تبلیغ",
    "📦 بسته کامل"
])

# ----- تب ۱: تولید محتوا -----
with tab1:
    st.subheader("تولید محتوای متنی")
    
    col1, col2 = st.columns(2)
    
    with col1:
        if st.button("📱 کپشن اینستاگرام", use_container_width=True):
            result = generate_instagram_caption(style, project)
            st.session_state['last_content'] = result
            st.session_state['last_title'] = "کپشن اینستاگرام"
            
        if st.button("💼 پست لینکدین", use_container_width=True):
            result = generate_linkedin_post(style, project)
            st.session_state['last_content'] = result
            st.session_state['last_title'] = "پست لینکدین"
            
        if st.button("📂 توضیح پروژه", use_container_width=True):
            result = generate_project_description(style, project)
            st.session_state['last_content'] = result
            st.session_state['last_title'] = "توضیح پروژه"
    
    with col2:
        if st.button("💡 ایده پست آموزشی", use_container_width=True):
            result = generate_content_ideas(style, project)
            st.session_state['last_content'] = result
            st.session_state['last_title'] = "ایده پست"
            
        if st.button("📖 داستان پروژه", use_container_width=True):
            result = generate_story(style, project)
            st.session_state['last_content'] = result
            st.session_state['last_title'] = "داستان پروژه"
    
    if 'last_content' in st.session_state:
        st.divider()
        st.markdown(f"### {st.session_state.get('last_title', 'محتوا')}")
        st.text_area("محتوای تولیدشده:", st.session_state['last_content'], height=250)
        
        col_a, col_b = st.columns(2)
        with col_a:
            st.download_button(
                "📥 دانلود به عنوان فایل",
                st.session_state['last_content'],
                file_name=f"{st.session_state.get('last_title', 'content')}_{datetime.now().strftime('%Y%m%d_%H%M')}.txt",
                mime="text/plain"
            )
        with col_b:
            st.code(st.session_state['last_content'][:100] + "...", language=None)

# ----- تب ۲: پرامپت تصویر -----
with tab2:
    st.subheader("🖼️ تولید پرامپت تصویر برای هوش مصنوعی")
    st.caption("پرامپت‌های قوی برای Midjourney، Flux، Grok Imagine، Leonardo و ...")
    
    view_type = st.selectbox(
        "نوع نما / زاویه",
        ["exterior", "interior", "detail", "aerial", "night", "moodboard"],
        format_func=lambda x: {
            "exterior": "نمای خارجی",
            "interior": "نمای داخلی",
            "detail": "جزئیات",
            "aerial": "نمای هوایی",
            "night": "نمای شب",
            "moodboard": "مودبورد"
        }[x]
    )
    
    if st.button("🎨 تولید پرامپت تصویر", type="primary"):
        result = generate_image_prompt(style, project, view_type)
        st.session_state['image_prompt'] = result
    
    if 'image_prompt' in st.session_state:
        st.markdown(st.session_state['image_prompt'])
        st.download_button(
            "📥 دانلود پرامپت",
            st.session_state['image_prompt'],
            file_name=f"image_prompt_{datetime.now().strftime('%Y%m%d_%H%M')}.txt",
            mime="text/plain"
        )

# ----- تب ۳: تقویم ماهانه -----
with tab3:
    st.subheader("📅 تقویم محتوایی ماهانه")
    
    month_name = st.text_input("نام ماه", value="مهر ۱۴۰۴")
    
    if st.button("📋 تولید تقویم ۳۰ روزه", type="primary"):
        calendar_data = generate_monthly_calendar(style, project, month_name)
        st.session_state['calendar'] = calendar_data
        st.session_state['calendar_month'] = month_name
    
    if 'calendar' in st.session_state:
        st.success(f"تقویم {st.session_state['calendar_month']} آماده است!")
        st.dataframe(
            st.session_state['calendar'],
            use_container_width=True,
            hide_index=True
        )
        
        # ساخت متن برای دانلود
        cal_text = f"# تقویم محتوایی {st.session_state['calendar_month']}\n"
        cal_text += f"تمرکز: {project} | سبک: {style}\n\n"
        for row in st.session_state['calendar']:
            cal_text += f"روز {row['روز']} ({row['تاریخ']}): {row['نوع محتوا']} - {row['موضوع پیشنهادی']} [{row['هدف']}]\n"
        
        st.download_button(
            "📥 دانلود تقویم (متن)",
            cal_text,
            file_name=f"content_calendar_{datetime.now().strftime('%Y%m%d')}.txt",
            mime="text/plain"
        )

# ----- تب ۴: پرامپت AI -----
with tab4:
    st.subheader("🤖 پرامپت حرفه‌ای برای هوش مصنوعی")
    st.caption("این پرامپت‌ها را کپی کنید و به Grok، ChatGPT، Claude و ... بدهید")
    
    prompt_type = st.radio(
        "نوع پرامپت",
        ["کپشن اینستاگرام", "پست لینکدین", "توضیح پروژه", "عمومی"],
        horizontal=True
    )
    
    if st.button("✨ تولید پرامپت", type="primary"):
        result = generate_ai_prompt(style, project, prompt_type)
        st.session_state['ai_prompt'] = result
    
    if 'ai_prompt' in st.session_state:
        st.code(st.session_state['ai_prompt'], language=None)
        st.download_button(
            "📥 دانلود پرامپت",
            st.session_state['ai_prompt'],
            file_name=f"ai_prompt_{datetime.now().strftime('%Y%m%d_%H%M')}.txt",
            mime="text/plain"
        )

# ----- تب ۵: هشتگ و تبلیغ -----
with tab5:
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("🏷️ هشتگ‌های تخصصی")
        if st.button("تولید هشتگ‌ها"):
            tags = generate_hashtags()
            st.session_state['hashtags'] = tags
        
        if 'hashtags' in st.session_state:
            st.text_area("هشتگ‌ها:", st.session_state['hashtags'], height=100)
    
    with col2:
        st.subheader("📢 متن تبلیغاتی")
        if st.button("تولید متن تبلیغاتی"):
            ad = generate_ad_text(style, project)
            st.session_state['ad_text'] = ad
        
        if 'ad_text' in st.session_state:
            st.text_area("متن تبلیغاتی:", st.session_state['ad_text'], height=200)

# ----- تب ۶: بسته کامل -----
with tab6:
    st.subheader("📦 تولید بسته کامل محتوا")
    st.write("با یک کلیک، چندین نوع محتوا را یکجا تولید و دانلود کنید.")
    
    if st.button("🚀 تولید بسته کامل", type="primary", use_container_width=True):
        with st.spinner("در حال تولید بسته کامل..."):
            pack = {
                "کپشن اینستاگرام": generate_instagram_caption(style, project),
                "پست لینکدین": generate_linkedin_post(style, project),
                "توضیح پروژه": generate_project_description(style, project),
                "ایده پست‌ها": generate_content_ideas(style, project),
                "داستان پروژه": generate_story(style, project),
                "متن تبلیغاتی": generate_ad_text(style, project),
                "هشتگ‌ها": generate_hashtags(),
                "پرامپت تصویر (exterior)": generate_image_prompt(style, project, "exterior"),
                "پرامپت AI (کپشن)": generate_ai_prompt(style, project, "کپشن اینستاگرام"),
            }
            
            full_text = f"# بسته کامل محتوای معماری\n"
            full_text += f"تاریخ: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n"
            full_text += f"سبک: {style} | پروژه: {project}\n\n"
            full_text += "=" * 50 + "\n\n"
            
            for title, content in pack.items():
                full_text += f"## {title}\n\n{content}\n\n" + "-" * 40 + "\n\n"
            
            st.session_state['full_pack'] = full_text
            st.success("بسته کامل آماده شد!")
    
    if 'full_pack' in st.session_state:
        st.download_button(
            "📥 دانلود بسته کامل (فایل متنی)",
            st.session_state['full_pack'],
            file_name=f"architecture_content_pack_{datetime.now().strftime('%Y%m%d_%H%M')}.txt",
            mime="text/plain",
            use_container_width=True
        )
        
        with st.expander("پیش‌نمایش بسته"):
            st.text(st.session_state['full_pack'][:2000] + "\n\n... (ادامه در فایل دانلود)")

# فوتر
st.divider()
st.caption("🏗️ Architecture AI Content Generator | ساخته شده برای معماران ایرانی")
