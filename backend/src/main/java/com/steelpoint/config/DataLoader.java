package com.steelpoint.config;

import com.steelpoint.model.Category;
import com.steelpoint.model.Product;
import com.steelpoint.repository.CategoryRepository;
import com.steelpoint.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataLoader(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) {
        if (productRepository.count() > 0) {
            System.out.println("The database already contains products, autoloading is not required.");
            return;
        }

        // Create categories with the correct names
        Category knives = new Category();
        knives.setName("Knives");

        Category multitools = new Category();
        multitools.setName("Multitools");

        Category fixed = new Category();
        fixed.setName("Fixed");

        Category machete = new Category();
        machete.setName("Machete");

        Category axe = new Category();
        axe.setName("Axe");

        Category shovel = new Category();
        shovel.setName("Shovel");

        categoryRepository.saveAll(List.of(knives, multitools, fixed, machete, axe, shovel));

        // Create products and assign categories
        productRepository.saveAll(List.of(
                new Product("Spyderco Endura 4", "Folding knife with VG-10 blade.", 120.0, "/images/endura4.jpg", knives),
                new Product("Benchmade Bugout 535", "Lightweight EDC knife with S30V steel.", 150.0, "/images/bugout535.jpg", knives),
                new Product("Cold Steel SRK", "Fixed survival knife with durable blade.", 90.0, "/images/srk.jpg", fixed),
                new Product("Gerber StrongArm", "Tactical fixed knife with rubber grip.", 90.0, "/images/strongarm.jpg", fixed),
                new Product("Leatherman Wave+", "Multitool with 18 functions.", 120.0, "/images/waveplus.jpg", multitools),
                new Product("Victorinox Huntsman", "Compact Swiss knife with 15 tools.", 50.0, "/images/huntsman.jpg", multitools),
                new Product("Spyderco Delica 4", "Compact folder with VG-10 steel and FRN handle.", 100.0, "/images/delica4.jpg", knives),
                new Product("Benchmade Griptilian 551", "Reliable knife with AXIS lock.", 170.0, "/images/griptilian551.jpg", knives),
                new Product("Cold Steel Recon 1", "Tactical knife with Tri-Ad lock and S35VN steel.", 130.0, "/images/recon1.jpg", knives),
                new Product("Ontario RAT-1", "Work knife with AUS-8 steel and nylon handle.", 50.0, "/images/rat1.jpg", knives),
                new Product("Leatherman Charge TTi", "Premium multitool with titanium and S30V blade.", 180.0, "/images/chargetti.jpg", multitools),
                new Product("Victorinox SwissTool Spirit X", "Versatile multitool with 24 functions.", 150.0, "/images/spiritx.jpg", multitools),
                new Product("Morakniv Companion", "Light bushcraft knife with rubber grip.", 20.0, "/images/companion.jpg", fixed),
                new Product("Spyderco Paramilitary 2", "Iconic folder with S30V steel and Compression Lock.", 170.0, "/images/paramilitary2.jpg", knives),
                new Product("Opinel No.8 Carbon", "Classic French folding knife with carbon steel.", 20.0, "/images/opinel8.jpg", knives),
                new Product("Victorinox Classic SD", "Mini keychain Swiss knife with 7 tools.", 25.0, "/images/classic_sd.jpg", multitools),
                new Product("Leatherman Skeletool", "Light multitool with essential tools only.", 90.0, "/images/skeletool.jpg", multitools),
                new Product("Yacare 10.25in Machete", "1095 steel drop point machete for tactical, hunting, survival.", 175.0, "/images/yacare.jpg", machete),
                new Product("KA-BAR USMC", "Legendary fixed combat knife with leather handle.", 100.0, "/images/kabar_usmc.jpg", fixed),
                new Product("ESEE 5", "Heavy-duty survival knife with full tang 1095 steel.", 150.0, "/images/esee5.jpg", fixed),
                new Product("Gerber Gator Machete", "Dual-edge machete with saw back.", 35.0, "/images/gator_machete.jpg", machete),
                new Product("Estwing Sportsman's Axe", "Forged in one piece with leather grip.", 50.0, "/images/estwing_axe.jpg", axe),
                new Product("CRKT Woods Chogan T-Hawk", "Tomahawk designed by Ryan Johnson.", 60.0, "/images/chogan.jpg", axe),
                new Product("Gerber Pack Hatchet", "Compact hatchet for camping and bushcraft.", 40.0, "/images/pack_hatchet.jpg", axe),
                new Product("Cold Steel Special Forces Shovel", "Tactical spade made from carbon steel.", 30.0, "/images/tactical_shovel.jpg", shovel),
                new Product("Cold Steel Trail Boss", "Versatile camp axe with hickory handle.", 45.0, "/images/trail_boss.jpg", axe),
                new Product("SOG Folding Shovel", "Tri-fold tactical entrenching tool.", 35.0, "/images/sog_shovel.jpg", shovel),
                new Product("Cold Steel Gladius Machete", "Roman-style tactical machete.", 50.0, "/images/gladius.jpg", machete),
                new Product("Leatherman Signal", "Multitool with survival features.", 130.0, "/images/signal.jpg", multitools),
                new Product("Gerber Suspension-NXT", "Affordable multitool with pocket clip.", 40.0, "/images/suspension_nxt.jpg", multitools),
                new Product("SOG PowerAccess Deluxe", "Compact multitool with gear-driven pliers.", 110.0, "/images/poweraccess.jpg", multitools),
                new Product("Buck 110 Folding Hunter", "Classic lockback folder with wood handle.", 60.0, "/images/buck110.jpg", knives),
                new Product("CRKT M16-14SFG", "Tactical folding knife with Veff serrations.", 90.0, "/images/m16.jpg", knives),
                new Product("Spyderco Tenacious", "Budget folder with G-10 scales.", 50.0, "/images/tenacious.jpg", knives),
                new Product("SOG Seal Pup Elite", "Compact fixed tactical knife.", 85.0, "/images/sealpup.jpg", fixed),
                new Product("Bark River Bravo 1", "Premium bushcraft knife made in USA.", 220.0, "/images/bravo1.jpg", fixed),
                new Product("Fallkniven F1", "Swedish survival knife with laminated steel.", 180.0, "/images/f1.jpg", fixed),
                new Product("Condor Golok Machete", "Heavy-duty chopping machete with walnut handle.", 70.0, "/images/golok.jpg", machete),
                new Product("Camillus Carnivore X", "Machete with saw back and pry tip.", 40.0, "/images/carnivorex.jpg", machete),
                new Product("CRKT Razel", "Compact chisel-tipped knife for utility use.", 75.0, "/images/razel.jpg", knives),
                new Product("Kershaw Blur", "Assisted-opening knife with S30V steel.", 90.0, "/images/blur.jpg", knives),
                new Product("Zero Tolerance 0450", "Premium folder with titanium handle.", 200.0, "/images/zt0450.jpg", knives),
                new Product("Boker Kalashnikov Auto", "Automatic knife with aluminum handle.", 60.0, "/images/kalashnikov.jpg", knives),
                new Product("Cold Steel Espada Large", "Massive tactical folder with Tri-Ad lock.", 180.0, "/images/espada.jpg", knives),
                new Product("TOPS BOB Fieldcraft", "Survival fixed blade designed by brothers of bushcraft.", 160.0, "/images/bob.jpg", fixed),
                new Product("Condor Bushlore", "Affordable bushcraft knife with leather sheath.", 50.0, "/images/bushlore.jpg", fixed)

        ));

        System.out.println("Demo products and categories added successfully.");
    }
}
