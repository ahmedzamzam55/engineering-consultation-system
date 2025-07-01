# 🚀 دليل رفع المشروع على GitHub

## 📋 قائمة المراجعة قبل الرفع

### ✅ الملفات المطلوبة

- [x] `.gitignore` - لاستبعاد الملفات غير المرغوبة
- [x] `README.md` - وصف شامل للمشروع
- [x] `LICENSE` - رخصة المشروع
- [x] `package.json` - معلومات المشروع والتبعيات
- [x] `.env.example` - مثال على متغيرات البيئة
- [x] `CONTRIBUTING.md` - دليل المساهمة
- [x] `CHANGELOG.md` - سجل التغييرات
- [x] GitHub Templates - قوالب Issues و PR

### ✅ التحقق من الإعدادات

- [x] Meta tags محسنة للـ SEO
- [x] خط Cairo مُحمل بشكل صحيح
- [x] أيقونات Font Awesome تعمل
- [x] التصميم متجاوب على جميع الأجهزة
- [x] الأنماط CSS محسنة
- [x] المكونات تعمل بشكل صحيح

## 🛠️ خطوات الرفع على GitHub

### 1. إنشاء مستودع على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. انقر على زر "New repository"
3. اختر اسم المستودع: `engineering-consultation-system`
4. أضف وصف: `نظام طلب الاستشارات الهندسية - موقع إلكتروني متطور`
5. اجعل المستودع **Public**
6. **لا تختر** "Add a README file" (لأن لدينا واحد بالفعل)
7. انقر على "Create repository"

### 2. تجهيز Git محلياً

افتح Terminal أو PowerShell في مجلد المشروع وقم بتنفيذ:

```bash
# التأكد من أن Git مثبت
git --version

# تهيئة Git repository
git init

# تعيين الفرع الافتراضي
git branch -M main

# إضافة معلومات المستخدم (غير هذه بمعلوماتك)
git config --global user.name "اسمك"
git config --global user.email "your-email@example.com"
```

### 3. إضافة الملفات والـ Commit الأول

```bash
# التحقق من الملفات
git status

# إضافة جميع الملفات
git add .

# التحقق من الملفات المضافة
git status

# إنشاء أول commit
git commit -m "Initial commit: إطلاق نظام الاستشارات الهندسية v1.0.0

✨ المميزات:
- واجهة مستخدم حديثة ومتجاوبة
- دعم كامل للغة العربية (RTL)
- 8 خدمات هندسية متخصصة
- فريق من 6 مهندسين معتمدين
- نظام طلب استشارة شامل
- تصميم متجاوب على جميع الأجهزة
- استخدام خط Cairo الجميل
- تأثيرات متحركة احترافية"
```

### 4. ربط المستودع المحلي بـ GitHub

```bash
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك على GitHub
git remote add origin https://github.com/YOUR_USERNAME/engineering-consultation-system.git

# التحقق من الربط
git remote -v
```

### 5. رفع الكود إلى GitHub

```bash
# رفع الكود للمرة الأولى
git push -u origin main

# في المرات القادمة يمكنك استخدام
git push
```

## 🔧 إعدادات GitHub إضافية

### 1. تفعيل GitHub Pages

1. اذهب إلى مستودعك على GitHub
2. انقر على "Settings"
3. مرر لأسفل إلى "Pages"
4. في "Source" اختر "GitHub Actions"
5. سيتم نشر الموقع تلقائياً عند كل push

### 2. حماية الفرع الرئيسي

1. في "Settings" → "Branches"
2. انقر على "Add rule"
3. في "Branch name pattern" اكتب `main`
4. فعّل:
   - "Require pull request reviews before merging"
   - "Require status checks to pass before merging"

### 3. إعداد العلامات (Labels)

اذهب إلى "Issues" → "Labels" وأضف:

- `bug` - للأخطاء
- `enhancement` - للميزات الجديدة
- `documentation` - للوثائق
- `good first issue` - للمبتدئين
- `help wanted` - للمساعدة المطلوبة

## 📱 النشر التلقائي

### Netlify (مجاني)

1. اذهب إلى [Netlify.com](https://netlify.com)
2. انقر على "New site from Git"
3. اختر GitHub وأذن للوصول
4. اختر المستودع
5. إعدادات البناء:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. انقر على "Deploy site"

### Vercel (مجاني)

1. اذهب إلى [Vercel.com](https://vercel.com)
2. انقر على "New Project"
3. استورد من GitHub
4. اختر المستودع
5. Vercel سيكتشف الإعدادات تلقائياً
6. انقر على "Deploy"

## 🔄 سير العمل اليومي

### إضافة ميزة جديدة

```bash
# إنشاء فرع جديد
git checkout -b feature/new-feature

# إجراء التغييرات...

# إضافة التغييرات
git add .
git commit -m "إضافة: وصف الميزة الجديدة"

# رفع الفرع
git push origin feature/new-feature

# إنشاء Pull Request على GitHub
```

### إصلاح خطأ

```bash
# إنشاء فرع للإصلاح
git checkout -b fix/bug-description

# إجراء الإصلاح...

# Commit والرفع
git add .
git commit -m "إصلاح: وصف الخطأ المُصلح"
git push origin fix/bug-description

# إنشاء Pull Request
```

### تحديث الفرع الرئيسي

```bash
git checkout main
git pull origin main
```

## 📊 مراقبة المشروع

### GitHub Insights

- تابع إحصائيات المستودع
- راقب المساهمات
- تحقق من الـ Traffic

### GitHub Actions

- تأكد من نجاح عملية البناء
- راجع سجلات الأخطاء إن وجدت

## 🆘 حل المشاكل الشائعة

### مشكلة: "remote: Permission denied"

```bash
# تأكد من إعدادات SSH أو استخدم HTTPS
git remote set-url origin https://github.com/YOUR_USERNAME/engineering-consultation-system.git
```

### مشكلة: "Your branch is ahead of 'origin/main'"

```bash
git push origin main
```

### مشكلة: "merge conflict"

```bash
# حل التعارضات يدوياً، ثم:
git add .
git commit -m "حل تعارضات الدمج"
git push
```

## 🎉 تهانينا!

مشروعك الآن جاهز ومرفوع على GitHub!

### الخطوات التالية:

1. ✅ شارك رابط المستودع
2. ✅ ادع الآخرين للمساهمة
3. ✅ راجع وحسّن الكود باستمرار
4. ✅ أضف ميزات جديدة
5. ✅ اكتب تقارير الأخطاء والتحسينات

---

**روابط مفيدة:**

- [دليل Git الأساسي](https://git-scm.com/book/ar/v2)
- [GitHub Docs](https://docs.github.com)
- [دليل Markdown](https://guides.github.com/features/mastering-markdown/)

💖 **مبروك على إنجاز مشروعك الأول على GitHub!**
