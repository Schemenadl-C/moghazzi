import { useMemo, useState } from "react";
import {
  I18nManager,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  FOOD_COUNT,
  IMAGES,
  allFoods,
  categories,
  faDigits,
} from "./foods";

if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export default function App() {
  const [q, setQ] = useState("");
  const [slug, setSlug] = useState(null);
  const [food, setFood] = useState(null);

  const category = categories.find((c) => c.slug === slug);
  const matches = useMemo(() => {
    const needle = q.trim();
    if (!needle) return [];
    return allFoods().filter(
      (f) =>
        f.name.includes(needle) ||
        f.latin.toLowerCase().includes(needle.toLowerCase()) ||
        f.category.title.includes(needle) ||
        f.category.nutrient.includes(needle)
    );
  }, [q]);

  if (category) {
    return (
      <SafeAreaView style={styles.screen}>
        <ScrollView contentContainerStyle={styles.pad}>
          <View style={styles.top}>
            <Pressable style={styles.backBtn} onPress={() => { setSlug(null); setFood(null); }}>
              <Text style={styles.back}>بازگشت</Text>
            </Pressable>
            <Text style={styles.brand}>مغذی</Text>
          </View>
          <Text style={styles.terracotta}>{category.nutrient}</Text>
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.signal}>{category.signal}</Text>
          <Text style={styles.why}>{category.why}</Text>
          <View style={styles.boardWrap}>
            <Image source={IMAGES[category.image]} style={styles.board} />
            <View style={styles.hotspots}>
              {category.foods.map((item) => (
                <Pressable key={item.id} onPress={() => setFood(item)} style={styles.spot} />
              ))}
            </View>
          </View>
          <View style={styles.names}>
            {category.foods.map((item) => (
              <Pressable key={item.id} onPress={() => setFood(item)} style={styles.nameBtn}>
                <Text style={styles.name}>{item.name}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.hint}>روی هر خانه یا نام بزنید</Text>
        </ScrollView>
        <Modal visible={!!food} transparent animationType="slide" onRequestClose={() => setFood(null)}>
          <Pressable style={styles.overlay} onPress={() => setFood(null)}>
            <View style={styles.sheet}>
              <Text style={styles.terracotta}>
                {category.title} · {category.nutrient}
              </Text>
              <Text style={styles.title}>{food?.name}</Text>
              <Text style={styles.signal}>{food?.latin}</Text>
              <Text style={styles.why}>{food?.note}</Text>
              <View style={styles.serving}>
                <Text>پیمانه پیشنهادی: {food?.serving}</Text>
              </View>
              <Pressable style={styles.close} onPress={() => setFood(null)}>
                <Text style={styles.closeText}>بستن</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.pad}>
        <View style={styles.header}>
          <Text style={styles.brand}>مغذی</Text>
          <Text style={styles.meta}>{faDigits(FOOD_COUNT)} ماده · ۶ قفسه</Text>
        </View>
        <View style={styles.heroWrap}>
          <Image source={IMAGES.hero} style={styles.hero} />
          <View style={styles.shade} />
          <View style={styles.heroCopy}>
            <Text style={styles.gold}>بیش از {faDigits(FOOD_COUNT)} ماده غذایی مغذی</Text>
            <Text style={styles.heroTitle}>
              خانم‌ها سوءتغذیه ندارند، ولی آن‌طور که باید مواد مغذی مصرف نمی‌کنند
            </Text>
          </View>
        </View>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="جستجوی ماده، نشانه یا ماده مغذی…"
          placeholderTextColor="#8A7C70"
          style={styles.search}
          textAlign="right"
        />
        {q.trim() ? (
          <View style={styles.results}>
            {matches.length === 0 ? (
              <Text style={styles.meta}>چیزی پیدا نشد.</Text>
            ) : (
              matches.map((f) => (
                <Pressable
                  key={f.id + f.category.slug}
                  style={styles.resultRow}
                  onPress={() => {
                    setSlug(f.category.slug);
                    setQ("");
                  }}
                >
                  <Text style={styles.name}>{f.name}</Text>
                  <Text style={styles.meta}>
                    {f.category.title} · {f.category.nutrient}
                  </Text>
                </Pressable>
              ))
            )}
          </View>
        ) : null}
        <Text style={styles.section}>قفسه‌های کاغذی</Text>
        {categories.map((c) => (
          <Pressable key={c.slug} style={styles.card} onPress={() => setSlug(c.slug)}>
            <Image source={IMAGES[c.image]} style={styles.board} />
            <View style={styles.cardMeta}>
              <View>
                <Text style={styles.cardTitle}>{c.title}</Text>
                <Text style={styles.terracotta}>{c.nutrient}</Text>
              </View>
              <Text style={styles.meta}>{c.signal}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3ECE1" },
  pad: { paddingBottom: 40 },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  top: {
    paddingHorizontal: 16,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { fontSize: 22, fontWeight: "700", color: "#3A322C" },
  meta: { fontSize: 13, color: "#8A7C70" },
  heroWrap: {
    marginHorizontal: 16,
    borderRadius: 22,
    overflow: "hidden",
    height: 420,
  },
  hero: { width: "100%", height: "100%" },
  shade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(58,50,44,0.28)",
  },
  heroCopy: { position: "absolute", left: 20, right: 20, bottom: 22 },
  gold: { color: "#C4A574", fontSize: 14 },
  heroTitle: { color: "#FAF6EF", fontSize: 26, fontWeight: "700", lineHeight: 36, marginTop: 8 },
  search: {
    margin: 16,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D7CCBC",
    backgroundColor: "#FAF6EF",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A322C",
  },
  results: {
    marginHorizontal: 16,
    backgroundColor: "#FAF6EF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D7CCBC",
  },
  resultRow: { padding: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#D7CCBC" },
  section: { fontSize: 22, fontWeight: "700", color: "#3A322C", marginHorizontal: 20, marginTop: 12 },
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: "#FAF6EF",
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D7CCBC",
  },
  board: { width: "100%", aspectRatio: 3 / 4 },
  cardMeta: { padding: 16, flexDirection: "row", justifyContent: "space-between", gap: 12 },
  cardTitle: { fontSize: 20, fontWeight: "700", color: "#3A322C" },
  terracotta: { color: "#B85A3E", marginTop: 4, fontWeight: "600" },
  backBtn: {
    borderWidth: 1,
    borderColor: "#D7CCBC",
    backgroundColor: "#FAF6EF",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  back: { color: "#6A5E54" },
  title: { fontSize: 32, fontWeight: "700", color: "#3A322C", marginTop: 6, paddingHorizontal: 20 },
  signal: { color: "#6A5E54", marginTop: 6, fontSize: 16, paddingHorizontal: 20 },
  why: { color: "#6A5E54", marginTop: 14, fontSize: 16, lineHeight: 26, paddingHorizontal: 20 },
  boardWrap: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D7CCBC",
  },
  hotspots: {
    ...StyleSheet.absoluteFillObject,
    margin: "7%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  spot: { width: "31%", height: "31%", margin: "1.1%" },
  names: { flexDirection: "row", flexWrap: "wrap", marginTop: 16, marginHorizontal: 16, gap: 8 },
  nameBtn: {
    width: "31%",
    backgroundColor: "#FAF6EF",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  name: { color: "#3A322C", fontSize: 13, fontWeight: "600" },
  hint: { textAlign: "center", color: "#8A7C70", marginTop: 16 },
  overlay: { flex: 1, backgroundColor: "rgba(58,50,44,0.4)", justifyContent: "flex-end" },
  sheet: {
    backgroundColor: "#FAF6EF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  serving: { marginTop: 16, backgroundColor: "#E7DCCB", borderRadius: 12, padding: 14 },
  close: { marginTop: 16, backgroundColor: "#3A322C", borderRadius: 12, paddingVertical: 14, alignItems: "center" },
  closeText: { color: "#FAF6EF", fontWeight: "600" },
});
